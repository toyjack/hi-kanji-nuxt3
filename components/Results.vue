<script setup lang="ts">
import {  computed, reactive, watch, watchEffect } from 'vue'

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
const books =  [...new Set(props.results.map(r => r.source.value))]
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
  <section>
    <div class="flex flex-col md:flex-row justify-center gap-1">
      <Select label="Division" :list="divisions" v-model:selected="selected.division" />
      <Select label="Document" :list="documents" v-model:selected="selected.document" />
      <Select label="Book" :list="books" v-model:selected="selected.book" />
      <Select label="Occupation" :list="occupations" v-model:selected="selected.occupation" />
      <Select label="Sends" :list="sends" v-model:selected="selected.send" />
    </div>


    <!-- results line -->
    <div class="relative flex py-1 sm:py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400">Results: {{ filterdResults.length }}</span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>
    <!-- results cards -->
    <div v-if="filterdResults.length > 0" class="flex flex-row flex-wrap p-1 m-0 sm:px-2 sm:py-4 justify-center">
      <div v-for="item of filterdResults"
        class="overflow-hidden rounded-sm shadow-lg w-1/3 sm:w-1/6 lg:w-1/12 flex flex-col sm:p-1 bg-white border">
        <a :href="'/glyph/' + item.id">
          <div class="relative  cursor-pointer">
            <img :src="item.thumbnail_url" alt="" loading="lazy"
              class=" object-cover sm:w-5/6 items-center justify-start">
            <div class="absolute">
              <!-- <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4> -->
              <p class="leading-normal text-white bg-gray-800 opacity-20"> {{ item.id }} </p>
            </div>
          </div>

        </a>
      </div>
    </div>
  </section>
</template>