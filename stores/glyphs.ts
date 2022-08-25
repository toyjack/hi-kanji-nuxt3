import { defineStore } from 'pinia'
import {SearchBody} from '@/types/SearchBody'
import { Hutime } from '~~/types/Hutime'

export const useGlyphStore = defineStore('glyphs', {
  state: () => ({
    glyphs: [],
    pending: false,
    occupations: <string[]>[],
    divisions: <string[]>[],
    dates: <string[]>[],
    ceDates: <string[]>[],
    ifShowFilter: true,
  }),
  actions: {
    async fetchData(character: string) {
      this.$reset()
      await this.fetchAPI(character)
      await this.convAllYear()
    },
    async fetchAPI(hanzi: string, position = 1) {
      const fetchUrl = `https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/character/${hanzi}?delegate=0&position=${position.toString()}`
      const { pending, data } = await useFetch<SearchBody>(fetchUrl, {initialCache:false})
      const resultList = data.value.list
      let resultNum = data.value.search_results as number

      resultList.forEach(item => this.addGlyph(item))

      if (resultNum > 99) {
        position += 100
        console.log(position)
        await this.fetchAPI(hanzi, position)
      }
    },
    async addGlyph(glyph) {
      let date = glyph.source.date
      if (date) {
        // trim
        date = date.trim()
        // zenkaku
        date = zenkakuConv(date)
        // remove sigh
        date = date.replace(/[〔〕（）\(\)]/g, '')

        glyph.source.date = date

        if (!this.dates.includes(date)) {
          this.dates.push(date)
        }
      }

      const occupation = glyph.source.occupation
      if (occupation && !this.occupations.includes(occupation)) {
        this.occupations.push(occupation)
      }

      const division = glyph.source.division
      if (division && !this.divisions.includes(division)) {
        this.divisions.push(division)
      }

      this.glyphs.push(glyph)
    },
    async convAllYear() {
      let datesToConv: string[] = []
      for (let glyph of this.glyphs) {
        const date = glyph.source.date
        if (date) {
          datesToConv.push(date)
        }
      }
      // console.log(this.glyphs.length)
      // console.log(datesToConv)

      let results = await convYearList(datesToConv)
      let ceDates = [... new Set(Object.values(results))].sort()
      this.ceDates = ceDates
      for (let glyph of this.glyphs) {
        let ce_date = results[glyph.source.date]
        if (ce_date)
          glyph.source.ce_date = ce_date
        else
          glyph.source.ce_date = "Unknown"
      }
    }
  },
  getters: {
    sortedByCeDate(state) {
      return state.glyphs.sort((a, b) => a.source.ce_date.localeCompare(b.source.ce_date))
    }
  }
})


function zenkakuConv(str) {
  return str.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
}

async function convYearList(dates: string[]): Promise<{ [key: string]: string }> {
  const fetchUrl = "http://ap.hutime.org/cal"
  const body = {
    "jsonrpc": "2.0",
    "method": "conv",
    "params": {
      "ical": "1001.1",
      "ocal": "101.1",
      "otype": "year",
      "ival": dates.join('\n')
    }
  }
  const { data } = await useFetch<Hutime>(fetchUrl, {
    method: "post",
    body: body,
    pick: ['result'],
  })

  let results = {}
  for (const [index, item] of dates.entries()) {
    const ceDate = data.value.result[index]?.text
    if (ceDate)
      results[item] = ceDate
    else
      results[item] = "Unknown"
  }

  return results
}

// TODO
// catagory: time(computed from date), division, occupation
//  book(value, callnumber), documet, send, to