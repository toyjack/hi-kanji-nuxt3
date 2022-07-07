<script setup lang="ts">
import kanaList from "public/kana_list.json"
</script>
<template>
  <div>
    <h2>kana</h2>
    <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
      <div v-for="item of kanaList"
        class="rounded-sm shadow-lg  flex flex-col sm:p-1 bg-white border hover:border-blue-300 hover:border-2">
        <NuxtLink :to="'/search/'+item.kanji">{{item.kanji}}</NuxtLink>
      </div>
    </div>
  </div>
</template>