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
const books =  [...new Set(props.results.map(r => r.source.book))]
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
    <div class="flex flex-row justify-center gap-1">

      <label class="text-gray-700" for="division">
        Divisions
        <select id="division"
          class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          v-model="selected.division" name="division">
          <option value="all">All</option>
          <option v-for="item in divisions" :value="item">
            {{ item }}
          </option>
        </select>
      </label>

      <label class="text-gray-700" for="book">
        Books
        <select id="book"
          class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          v-model="selected.book" name="book">
          <option value="all">All</option>
          <option v-for="item in books" :value="item">
            {{ item }}
          </option>
        </select>
      </label>

      <label class="text-gray-700" for="document">
        Documents
        <select id="document"
          class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          v-model="selected.document" name="document">
          <option value="all">All</option>
          <option v-for="item in documents" :value="item">
            {{ item }}
          </option>
        </select>
      </label>

      <label class="text-gray-700" for="send">
        Sends
        <select id="send"
          class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          v-model="selected.send" name="send">
          <option value="all">All</option>
          <option v-for="item in sends" :value="item">
            {{ item }}
          </option>
        </select>
      </label>

      <label class="text-gray-700" for="occupation">
        Occupations
        <select id="occupation"
          class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          v-model="selected.occupation" name="occupation">
          <option value="all">All</option>
          <option v-for="item in occupations" :value="item">
            {{ item }}
          </option>
        </select>
      </label>



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