<script setup lang="ts">
import { computed, reactive, watch, watchEffect } from 'vue'

interface Ifilter {
  division?: string,
  document?: string,
  book?: string,
  occupation?: string,
  send?: string
}

const props = defineProps(['results'])
const selected = <Ifilter>reactive({
  division: 'all',
  document: 'all',
  book: 'all',
  occupation: 'all',
  send: 'all'
})

const ifShowFilter = ref('false')
const filter = <Ifilter>reactive({})

const filterdResults = computed(() => {
  return props.results.filter((item) => {
    for (let key in filter) {
      if (item.source[key] === undefined || item.source[key] != filter[key])
        return false;
    }
    return true;
  })
})

const divisions = [...new Set(props.results.map(r => r.source.division))]
const documents = [...new Set(props.results.map(r => r.source.document))]
const books = [...new Set(props.results.map(r => r.source.value))]
const occupations = [...new Set(props.results.map(r => r.source.occupation))]
const sends = [...new Set(props.results.map(r => r.source.send))]

watch(selected, (newSelected, old) => {
  for (var key in selected) {
    if (selected[key] === 'all') {
      delete filter[key]
    } else {
      filter[key] = selected[key]
    }
  }
})

</script>
<template>
  <section class="container mx-auto flex flex-col">
    <div class="self-end items-end p-1 md:hidden">
      <div class="relative inline-block w-10 mr-2 align-middle select-none">
        <input type="checkbox" name="toggle" id="toggle"
          v-model="ifShowFilter" true-value="true" false-value="false"
          class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
        <label for="toggle" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
        </label>
      </div>
      <span class="text-gray-400 font-medium">
        Filter
      </span>
    </div>
    <div 
    :class="{ hidden: ifShowFilter==='false' }"
    class="md:flex flex-col md:flex-row justify-center gap-1">
      <Select label="Division" :list="divisions" v-model:selected="selected.division" />
      <Select label="Document" :list="documents" v-model:selected="selected.document" />
      <Select label="Book" :list="books" v-model:selected="selected.book" />
      <Select label="Occupation" :list="occupations" v-model:selected="selected.occupation" />
      <Select label="Sends" :list="sends" v-model:selected="selected.send" />
    </div>

    <!-- results line -->
    <div class="relative flex py-1 sm:py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400">Glyphs: {{ filterdResults.length }}</span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <!-- results cards -->
    <div v-if="filterdResults.length > 0" class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
      <div v-for="item of filterdResults"
        class="rounded-sm shadow-lg  flex flex-col sm:p-1 bg-white border hover:border-blue-300 hover:border-2">
        <a :href="'/glyph/' + item.id" class="cursor-pointer flex flex-col h-full justify-between" target="blank">
          <img :src="item.thumbnail_url" alt="" loading="lazy" class="w-full items-center justify-start">
          <p class="leading-normal text-gray-100 text-center bg-blue-500 opacity-30"> {{ item.id }} </p>
        </a>
      </div>
    </div>
  </section>
</template>