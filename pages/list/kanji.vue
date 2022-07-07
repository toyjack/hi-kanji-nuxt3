<script setup lang="ts">
import bushu from "public/radicals.json"
const route = useRoute()
const selected = ref(decodeURI(route.path.split("/")[3]))

function changeSelected() {
  return navigateTo({
    path: '/list/kanji/' + selected.value,
  })
}

</script>

<template>
  <div>
    <h2>Bushu List</h2>
    <select class="select w-full max-w-xs" v-model="selected" @change="changeSelected()">
      <option disabled value=''>Select to show</option>
      <option v-for="option in bushu" :value="option.radical">
        [{{option.stroke}}画] {{ option.radical }} ({{ option.count}}字)
      </option>
    </select>
    <NuxtPage  />
  </div>
</template>