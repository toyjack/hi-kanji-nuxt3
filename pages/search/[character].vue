<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGlyphStore } from '@/stores/glyphs'
const glyphStore = useGlyphStore()
const {glyphs} = storeToRefs(glyphStore)

glyphStore.clear()

const route = useRoute()
const character = route.params.character as string
let delegate = 0
let position = 1
const isPending = ref(false)

const inputCharacter = ref<string>(character)
const results = ref<string[]>([])

if (character) {
  isPending.value = true
  await search()
}

async function search() {
  const fetchUrl = `https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/character/${character}?delegate=${delegate}&position=${position}`
  const { data: tempResult } = await useFetch(fetchUrl)

  const resultList = tempResult.value.list
  const resultNum = tempResult.value.search_results as number
  // results.value.push(...resultList)
  resultList.forEach(item=>glyphStore.addGlyph(item))
  
  if (resultNum < 100) {
    position = 1
    isPending.value = false
  } else {
    position += 100
    search()
  }
}

function move() {
  return navigateTo({
    path: `/search/${inputCharacter.value}`,
  })
}

// definePageMeta({
//   title: "aa",
//   keepalive: true
// })

</script>

<template>
  <div class="">
    <div class="flex flex-row p-1 md:py-10 md:px-20 items-center justify-center gap-1 md:gap-4">
      <input type="text" placeholder="検索" v-model="inputCharacter"
        class=" border-transparent appearance-none border border-gray-300 py-2 px-4 w-2/3 md:w-1/5 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
      <button type="button" @click="move"
        class="w-1/3 md:w-1/12 text-white bg-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black duration-300">Search</button>
    </div>

    <!-- Results -->
    <Results :results="glyphs" v-if="glyphs" />
  </div>
</template>