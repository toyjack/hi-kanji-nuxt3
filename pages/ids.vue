<script setup lang="ts">
import { idsfind } from 'idsfind'
import kanjiList from 'public/kanji_list.json'



const terms = ref("")
const results = ref([])

function search(){
  let idsfindResults=idsfind(terms.value, true)
  results.value = idsfindResults.filter(x => kanjiList.map(item => item.kanji).includes(x));
}
</script>

<template>
  <div class="container mx-auto flex flex-col">
    <div class="form-control w-full max-w-xs p-1 md:p-3">
      <label class="label">
        <span class="label-text">{{ $t('input-component-to-search') }}</span>
      </label>
      <div class=" input-group">
        <input type="text" name="idsToSearch" class="input input-bordered input-primary w-full max-w-xs"
          v-model="terms">

        <button class="btn btn-square" @click="search">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>


    <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-y-1 md:gap-1 p-1 md:p-3">
      <div v-for="item of results"
        class="rounded-sm shadow-lg  flex flex-col item-center text-center p-2 bg-white border hover:border-blue-300 hover:border-2">
        <NuxtLink :to="'/search/' + item">{{ item }}</NuxtLink>
      </div>
    </div>


    <NuxtPage />
  </div>
</template>