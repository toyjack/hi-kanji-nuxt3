<script setup lang="ts">
import kanjiList from 'public/kanji_list.json'

const route=useRoute()
const bushu=route.params.bushu

const filterdList = kanjiList.filter(item => item.radical == bushu)
</script>

<template>
  <div>
    <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
      <div v-for="item of filterdList"
        class="rounded-sm shadow-lg  flex flex-col sm:p-1 bg-white border hover:border-blue-300 hover:border-2">
        <NuxtLink :to="'/search/'+item.kanji">{{item.kanji}}</NuxtLink>
      </div>
    </div>
  </div>
</template>