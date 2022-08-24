<script setup lang="ts">
import bushu from "public/radicals.json"
const route = useRoute()
const selected = ref("")
if (route.path.split("/")[3]){
  selected.value = decodeURI(route.path.split("/")[3])
}

function changeSelected() {
  return navigateTo({
    path: '/list/kanji/' + selected.value,
  })
}

</script>

<template>
  <div class="container mx-auto">
    <div class="form-control w-full max-w-xs p-1 md:p-3">
      <label class="label">
        <span class="label-text">{{ $t('select-a-radical') }}</span>
      </label>
      <select class="select select-bordered" v-model="selected" @change="changeSelected()">
        <option disabled selected value=''>{{ $t('select-to-show') }}</option>
        <option v-for="option in bushu" :value="option.radical">
          [{{option.stroke}}画] {{ option.radical }} ({{ option.count}}字)
        </option>
      </select>
    </div>

    <NuxtPage />
  </div>
</template>