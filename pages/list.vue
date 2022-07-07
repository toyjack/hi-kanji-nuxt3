<script setup lang="ts">
const route = useRoute()
const selected = ref(route.path.split("/")[2])
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
  <div>
    <h2>Type List</h2>
    <select class="select w-full max-w-xs" v-model="selected" @change="changeSelected()">
      <option disabled value=''>Select to show</option>
      <option v-for="option in options" :value="option.value">
        {{option.text}}
      </option>
    </select>
    <NuxtPage :foobar="123" />
  </div>
</template>