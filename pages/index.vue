<script setup lang="ts">
const hanzi = ref<string>('天')
let delegate = 0
let position = 1
const results = ref<string[]>([])
async function search() {
  const { data } = await useFetch(`https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/character/${hanzi.value}?delegate=${delegate}&position=${position}`)
  const resultList = data.value.list
  const resultNum = data.value.search_results as number

  results.value.push(...resultList)
  if (resultNum < 100) {
    position = 1
  } else {
    position += 100
    search()
  }
}

async function startSearch() {
  results.value = []
  await search()
}
</script>

<template>
  <div class="bg-gray-100">
    <!-- header -->
    <TheHeader />

    <!-- form -->
    <section>
      <div class="flex flex-row sm:flex-row p-1 sm:py-10 sm:px-20 items-center justify-center gap-4">
        <input type="text" placeholder="検索" v-model="hanzi" class="px-4 py-2 focus:border-blue-500 rounded">
        <button type="button" @click="startSearch"
          class="text-white bg-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black duration-300">Search</button>
      </div>
    </section>

    <!-- results -->
    <Results :results="results" v-if="results.length > 0" />

    <Footer />
  </div>
</template>