<script setup lang="ts">
// TODO: add type for fetched data
const route = useRoute()
const id = route.params.id
const baseUrl = "https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/controlnumber/"

const fetchUrl = baseUrl + id
const { data:displayData, pending } = await useFetch(fetchUrl)

const unihanBaseUrl = "https://www.unicode.org/cgi-bin/GetUnihanData.pl?codepoint="

function hexStr2dec(hexStr: string) {
  return parseInt(hexStr, 16)
}

function code2char(code: number) {
  return String.fromCodePoint(code)
}
</script>

<template>
  <section class="container mx-auto flex flex-col" v-if="!pending">
    <div class="flex flex-col">
      <div class="flex flex-row flex-wrap">
        <img class="w-5/6 md:w-1/4" :src="displayData.data[0].thumbnail_url" alt="">
        <div class="flex flex-col">
          <h2 class="text-xl font-bold">ID: {{ displayData.data[0].id }}</h2>
          <h2 class="text-xl font-bold">Character: {{ displayData.data[0].title }}</h2>
          <h2 class="text-xl font-bold">
            <a class="underline hover:text-blue-500" :href="unihanBaseUrl + code2char(hexStr2dec(displayData.data[0].unicode))"
              target="blank">
              Unicode: U+{{ displayData.data[0].unicode }}
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

      <div>
        <p>iiif manifest: {{ displayData.data[0].manifest_url }} </p>
      </div>
    </div>
  </section>
</template>