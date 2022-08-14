<script setup lang="ts">
import kanaList from "public/kana_list.json"
</script>
<template>
  <div>
    <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 md:gap-1 p-1">
      <!-- TODO: 50音順 -->
      <div v-for="item of kanaList"
        class="rounded-sm shadow-lg flex flex-col p-1 md:p-3 text-center bg-white border hover:border-blue-300 hover:border-2">
        <NuxtLink :to="'/search/'+item.kanji">{{item.kanji}}</NuxtLink>
      </div>
    </div>
  </div>
</template>