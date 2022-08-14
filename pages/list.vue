<script setup lang="ts">
const route = useRoute()
const selected = ref("")
if (route.path.split("/")[2]) {
  selected.value = route.path.split("/")[2]
}
const options =[
  { text: 'Kana', value: 'kana' },
  { text: 'Kanji', value: 'kanji' },
]

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
        <span class="label-text">字種を選ぶ</span>
      </label>
      <select class="select select-bordered" v-model="selected" @change="changeSelected()">
        <option disabled selected value=''>Select to show</option>
        <option v-for="option in options" :value="option.value">
          {{option.text}}
        </option>
      </select>
    </div>

    <NuxtPage />
  </div>
</template>