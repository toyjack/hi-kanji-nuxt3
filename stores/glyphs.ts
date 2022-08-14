import { defineStore } from 'pinia'

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
      const delegate = 0
      let position = 1

      while (1) {
        const fetchUrl = `https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/character/${character}?delegate=${delegate}&position=${position.toString()}`
        const { pending, data } = await useFetch<CharacterApiResult>(fetchUrl, { pick: ['list', 'search_results'] })
        this.pending = pending
        const resultList = data.value.list
        const resultNum = data.value.search_results
        resultList.forEach(item => this.addGlyph(item))

        if (resultNum < 100) 
          break

        position += 100
      }
      
      await this.convAllYear()
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
  getters:{
    sortedGlyphs(state){
      return state.glyphs.sort((a, b) => a.source.ce_date.localeCompare(b.source.ce_date))
    }
  }
})


function zenkakuConv(str) {
  return str.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
}

async function convYearList(dates: string[]): Promise<{ [key: string]: string }> {
  interface HuItem {
    text: string
  }
  interface HuData {
    jsonrpc: string,
    result: [HuItem],
    id: string
  }
  const fetchUrl = "http://ap.hutime.org/cal"
  const body = {
    "jsonrpc": "2.0",
    "method": "conv",
    "params": {
      "ical": "1001.1",
      "ocal": "101.1",
      "otype": "year",
      "ival": dates.join('\n')
    },
    "id": 42
  }
  const { data } = await useFetch<HuData>(fetchUrl, {
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

interface CharacterList {
  identifer: string,
  id: number,
  title: string,
  delegate: number,
  unicode: string,
  source: {
    division: string,
    call_number: string,
    page: string,
    date: string,
    document: string,
    value: string,
    send: string,
    to: string,
    remarks: string,
    occupation: string
  },
  thumbnail_url: string,
  manifest_url: string,
  subject: string,
  creator: string,
  rights: string,
  rights_url: string
}
interface CharacterApiResult {
  status_code: string,
  search_results: number,
  list: [CharacterList]
}


async function searchList(character: string, position = 1, lastResult: CharacterList[] = [], delegate = 0) {
  const fetchUrl = `https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/character/${character}?delegate=${delegate}&position=${position.toString()}`
  const { data } = await useFetch<CharacterApiResult>(fetchUrl, { pick: ['list', 'search_results'] })
  const resultList = data.value.list
  const resultNum = data.value.search_results

  return resultList

  lastResult = lastResult.concat(resultList)
  // lastResult = lastResult.concat(JSON.parse(JSON.stringify(resultList)))

  if (resultNum < 100) {
    return lastResult
  } else {
    position += 100
    await searchList(character, position, lastResult)
  }
}
// TODO
// catagory: time(computed from date), division, occupation
//  book(value, callnumber), documet, send, to