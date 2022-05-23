<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const baseUrl = "https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/controlnumber/"

const fetchUrl = baseUrl + id
const { data } = await useFetch(fetchUrl)

const displayData = data.value.data[0]

const unihanBaseUrl = "https://www.unicode.org/cgi-bin/GetUnihanData.pl?codepoint="

function hexStr2dec(hexStr: string) {
  return parseInt(hexStr, 16)
}

function code2char(code: number) {
  return String.fromCodePoint(code)
}
</script>

<template>
  <section class="container mx-auto flex flex-col">
    <div class="flex flex-col">
      <div class="flex flex-row flex-wrap">
        <img class="w-5/6 md:w-1/4" :src="displayData.thumbnail_url" alt="">
        <div class="flex flex-col">
          <h2 class="text-xl font-bold">ID: {{ displayData.id }}</h2>
          <h2 class="text-xl font-bold">Character: {{ displayData.title }}</h2>
          <h2 class="text-xl font-bold">
            <a class="underline hover:text-blue-500" :href="unihanBaseUrl + code2char(hexStr2dec(displayData.unicode))"
              target="blank">
              Unicode: U+{{ displayData.unicode }}
            </a>
          </h2>
          <h2 class="text-xl font-bold">Daikanwa Code: {{ displayData.daikanwa_code }}</h2>
          <h2 class="text-xl font-bold">Chinese Reading: {{ displayData.chinese_reading }}</h2>
          <h2 class="text-xl font-bold">Japanese Reading: {{ displayData.japanese_reading }}</h2>
        </div>
      </div>

      <div class="flex flex-col p-1 border-2 rounded border-blue-500">
        <h1 class="text-xl font-bold">Source:</h1>
        <h2 class="">division: {{ displayData.source.division }}</h2>
        <h2 class="">call_number: {{ displayData.source.call_number }}</h2>
        <h2 class="">page: {{ displayData.source.page }}</h2>
        <h2 class="">date: {{ displayData.source.date }}</h2>
        <h2 class="">document: {{ displayData.source.document }}</h2>
        <h2 class="">value: {{ displayData.source.value }}</h2>
        <h2 class="">send: {{ displayData.source.send }}</h2>
        <h2 class="">to: {{ displayData.source.to }}</h2>
        <h2 class="">remarks: {{ displayData.source.remarks }}</h2>
        <h2 class="">occupation: {{ displayData.source.occupation }}</h2>
      </div>

      <div>
        <p>iiif manifest: {{ displayData.manifest_url }} </p>
      </div>
    </div>
  </section>
</template>