<script setup lang="ts">
import kanjiList from 'public/kanji_list.json'
import hiVariants from 'public/hi_variants.json'

const route = useRoute()
const bushu = route.params.bushu

const filterdList = kanjiList.filter(item => item.radical == bushu)

function kanjiItem(kanji: string) {
  if (kanji in hiVariants)
    return kanji + "(" + hiVariants[kanji] + ")"

  return kanji
}
</script>

<template>
  <div>
    <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
      <div v-for="item of filterdList"
        class="rounded-sm shadow-lg  flex flex-col sm:p-1 bg-white border hover:border-blue-300 hover:border-2">
        <NuxtLink :to="'/search/' + item.kanji">{{ kanjiItem(item.kanji) }}</NuxtLink>
      </div>
    </div>
  </div>
</template>