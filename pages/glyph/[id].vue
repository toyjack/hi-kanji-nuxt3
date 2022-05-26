<script setup lang="ts">
// TODO: add type for fetched data
const route = useRoute()
const id = route.params.id
const baseUrl = "https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/controlnumber/"

const fetchUrl = baseUrl + id
const { data: displayData, pending } = await useFetch(fetchUrl)

const unihanBaseUrl = "https://www.unicode.org/cgi-bin/GetUnihanData.pl?codepoint="

function hexStr2dec(hexStr: string) {
  return parseInt(hexStr, 16)
}

function code2char(code: number) {
  return String.fromCodePoint(code)
}


function getClioimgUrl(call_number, page, id) {
  call_number = call_number.replace('@ja', '')
  let callNum1, callNum2, callNum3
  [callNum1, callNum2, callNum3] = call_number.split('-')
  callNum1=callNum1.replace("貴", "_000ki_")
  return `https://clioimg.hi.u-tokyo.ac.jp/viewer/view/idata/000/${callNum1}/${callNum2}/${callNum3}/${page}?ci=1&kts=2&dts=34&mts=${id}`
}

// https://clioimg.hi.u-tokyo.ac.jp/viewer/view/idata/000/0671/18/1/00000003?ci=1&kts=2&dts=34&mts=34019695
// ci: side panel
// kts, dts: ?
// mts: kuzushiji ID

// async function convYear(date: string) {
//   // http://ap.hutime.org/cal/?method=conv&ical=1001.1&ocal=101.1&otype=year&ival=元弘3年11月9日@ja
//   const huBaseUrl = "http://ap.hutime.org/cal/?method=conv&ical=1001.1&ocal=101.1&otype=year&ival="
//   const fetchUrl = huBaseUrl + date
//   // console.log(fetchUrl)
//   // return ""
//   const { data: huresult} = await useFetch(fetchUrl)
//   return huresult.value
// }

// TODO https://clioimg.hi.u-tokyo.ac.jp/viewer/list/idata/000/0071/16/1/?m=limit
// TODO iiif viewer

// TODO
// 新検索システムへ
// https://wwwap.hi.u-tokyo.ac.jp/ships/neo/w34/detail/34084126?dispid=disp02
// 原本へ
// https://clioimg.hi.u-tokyo.ac.jp/viewer/view/idata/000/0071/16/4/00000015?ci=1&kts=2&dts=34&mts=34084126

// copyright
</script>

<template>
  <section class="container mx-auto flex flex-col" v-if="!pending">
    <div class="flex flex-col gap-2">
      <div class="flex flex-row flex-wrap gap-2">
        <img class="w-5/6 md:w-1/4 border-2" :src="displayData.data[0].thumbnail_url" alt="">
        <div class="flex flex-col justify-center">
          <h2 class="text-xl font-bold">ID: {{ displayData.data[0].id }}</h2>
          <h2 class="text-xl font-bold">Character: {{ displayData.data[0].title }}</h2>
          <h2 class="text-xl font-bold">
            Unicode:
            <a class="underline hover:text-blue-500"
              :href="unihanBaseUrl + code2char(hexStr2dec(displayData.data[0].unicode))" target="blank">
              U+{{ displayData.data[0].unicode }}
            </a>
          </h2>
          <h2 class="text-xl font-bold">Daikanwa Code: {{ displayData.data[0].daikanwa_code }}</h2>
          <h2 class="text-xl font-bold">Chinese Reading: {{ displayData.data[0].chinese_reading }}</h2>
          <h2 class="text-xl font-bold">Japanese Reading: {{ displayData.data[0].japanese_reading }}</h2>
        </div>
      </div>

      <div class="flex flex-col p-1 border-2 rounded border-blue-500">
        <h1 class="text-xl font-bold">Source:</h1>
        <h2 class="">division: {{ displayData.data[0].source.division }}</h2>
        <h2 class="">call_number: {{ displayData.data[0].source.call_number }}</h2>
        <h2 class="">page: {{ displayData.data[0].source.page }}</h2>
        <h2 class="">date: {{ displayData.data[0].source.date }}</h2>
        <h2 class="">document: {{ displayData.data[0].source.document }}</h2>
        <h2 class="">value: {{ displayData.data[0].source.value }}</h2>
        <h2 class="">send: {{ displayData.data[0].source.send }}</h2>
        <h2 class="">to: {{ displayData.data[0].source.to }}</h2>
        <h2 class="">remarks: {{ displayData.data[0].source.remarks }}</h2>
        <h2 class="">occupation: {{ displayData.data[0].source.occupation }}</h2>
      </div>

      <div class="flex flex-col p-1 border-2 border-blue-500 rounded">
        <h1 class="text-xl font-bold">CLIOIMG URL:</h1>
        <h2>
          <a class="underline hover:text-blue-500" target="blank"
            :href="getClioimgUrl(displayData.data[0].source.call_number, displayData.data[0].source.page, displayData.data[0].id)">
            {{ getClioimgUrl(displayData.data[0].source.call_number, displayData.data[0].source.page,
                displayData.data[0].id)
            }}
          </a>
        </h2>
      </div>

      <div class="flex flex-col p-2 border-2 rounded border-blue-500">
        <h3 class="text-xl font-bold">TODO: IIIF Viewer</h3>
        <p>iiif manifest: <a :href="displayData.data[0].manifest_url" target="blank" class="underline hover:text-blue-500">{{ displayData.data[0].manifest_url }}</a> </p>
      </div>
    </div>
  </section>
</template>

