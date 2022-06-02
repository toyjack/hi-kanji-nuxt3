import { defineStore } from 'pinia'

export const useGlyphStore = defineStore('glyphs', {
  state: () => ({
    glyphs: [],
    occupations: <string[]>[],
    divisions: <string[]>[],
    dates: <string[]>[],
    ceDates: <string[]>[],
    ifShowFilter: true,
  }),
  actions: {
    async addGlyph(glyph) {
      let date = glyph.source.date
      if (date) {
        // trim
        date = date.trim()
        // zenkaku
        date = zenkakuConv(date)
        // remove sigh
        date = date.replace(/[（）\(\)]/g, '')

        glyph.source.date = date

        if (!this.dates.includes(date)) {
          this.dates.push(date)
        }

        // TODO hutime使いすぎ...
        const ce_date = await convYear(date)
        glyph.source.ce_date = ce_date
        if (!this.ceDates.includes(ce_date)) {
          this.ceDates.push(ce_date)
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

      // this.glyphs[glyph.id] = glyph
      this.glyphs.push(glyph)
    },
    clear() {
      this.glyphs = []
      this.occupations = []
      this.divisions = []
      this.dates = []

    },
  }
})

async function convYear(date: string) {
  // http://ap.hutime.org/cal/?method=conv&ical=1001.1&ocal=101.1&otype=year&ival=元弘3年11月9日@ja
  const huBaseUrl = "http://ap.hutime.org/cal/?method=conv&ical=1001.1&ocal=101.1&otype=year&ival="
  const fetchUrl = huBaseUrl + date
  const { data } = await useFetch(fetchUrl)
  return data.value
}

function zenkakuConv(str) {
  return str.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
}

// TODO
// catagory: time(computed from date), division, occupation
//  book(value, callnumber), documet, send, to