<script setup lang="ts">
const route = useRoute()
const selected = ref("")

if (route.path.split("/")[2]) {
  selected.value = route.path.split("/")[2]
}

function changeSelected(){
  return navigateTo({
    path: '/list/'+selected.value,
  })
}
</script>

<template>
  <div class="container mx-auto">
    <div class="form-control w-full max-w-xs p-1 md:p-3">
      <label class="label">
        <span class="label-text">{{ $t('select-jishu') }}</span>
      </label>
      <select class="select select-bordered" v-model="selected" @change="changeSelected()">
        <option disabled selected value=''>{{ $t('select-to-show') }}</option>
        <option value="kana">{{ $t('kana') }}</option>
        <option value="kanji">{{ $t('kanji') }}</option>
      </select>
    </div>

    <NuxtPage />
  </div>
</template>