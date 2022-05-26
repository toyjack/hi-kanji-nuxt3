import { defineStore } from 'pinia'

export const useBookStore = defineStore('books', {
  state: () => ({
    books: {},
  }),
  actions: {
    addBook(book) {
      this.books[book.call_number] = book
    },
    clear() {
      this.books = {}
    },
  }
})


// TODO
// catagory: time(computed from date), division, occupation
//  book(value, callnumber), documet, send, to

// TODO:
// value 史料群名
// document 文書名
// send 差出
// to 宛所

// sample
// 【文字】	天
// 【部首】	037, 009, 001
// 【文字コード】	5929
// 【大漢和コード】	05833
// 【音読み】	テン
// 【訓読み】	あめ；そら
// 【史料区分】	原本
// 【架番号】	0071 - 16 - 2
// 【頁】	00000029
// 【和暦年月日】	天文１６年２月２０日
// 【文書名】	尼子晴久書状
// 【史料群名】	中川四郎氏所蔵文書
// 【差出】	晴久Ｋ
// 【宛所】	盛清　御返事
// 【備考】
// 【属性】	武家