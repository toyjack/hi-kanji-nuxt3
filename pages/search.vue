<script setup lang="ts">
// https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/character/%E5%A4%A9?delegate=0
// const { data } = await useAsyncData('count', () => 
//   $fetch('https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/character/%E5%A4%A9?delegate=0')
// )

const hanzi = ref<string>('天')
let delegate = 0
let position = 1
const results = ref<string[]>([])
async function search() {
  console.log(hanzi.value)
  const { data } = await useFetch(`https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/character/${hanzi.value}?delegate=${delegate}&position=${position}`)
  const resultList = data.value.list
  const resultNum = data.value.search_results as number

  results.value.push(...resultList)
  if (resultNum < 100) {
    console.log(resultList)

    console.log(results.value)
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
    <section>
      <h1 class="text-3xl font-serif text-white bg-blue-500 rounded flex-1 shadow">search page</h1>
    </section>

    <!-- form -->
    <section>
      <div class="flex flex-row sm:flex-row py-10 px-20 items-center justify-center gap-4">
        <input type="text" placeholder="検索" v-model="hanzi" class="px-4 py-2 focus:border-blue-500">
        <button type="button" @click="startSearch"
          class="text-white bg-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black duration-300">Search</button>
      </div>
    </section>

    <!-- results -->
    <section>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-gray-400">Results: {{ results.length }}</span>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div v-if="results.length > 0" class="flex flex-row flex-wrap gap-1 px-2 py-4 justify-center">
        <div v-for="item of results" class="w-1/6 flex flex-col p-1 bg-white items-center">
          <img :src="item.thumbnail_url" alt="" loading="lazy" class="w-5/6">
          <div class="flex flex-col text-xs">
            <div>
              division: {{ item.source.division }}
            </div>
            <div>
              value: {{ item.source.value }}
            </div>
            <div>
              call_number: {{ item.source.call_number }}
            </div>
            <div>
              Manifest: <a :href="item.manifest_url" class="text-blue-500">LINK</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="bg-blue-600 text-white flex items-center justify-center px-6 m-6">
      <div>Copyright 2022 Guanwei Liu</div>
    </footer>
  </div>
</template>