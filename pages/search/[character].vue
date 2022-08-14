<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGlyphStore } from '@/stores/glyphs'

const glyphStore = useGlyphStore()
const { glyphs } = storeToRefs(glyphStore)

const route = useRoute()
const character = route.params.character as string

if (character) {
  glyphStore.fetchData(character)
}

console.log(glyphStore.sortedGlyphs)

// TODO: auto header update
</script>

<template>
  <div class="">
    <!-- Results -->
    <Results v-if="glyphs" />
  </div>
</template>