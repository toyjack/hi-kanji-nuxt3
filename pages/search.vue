<script setup lang="ts">
const route = useRoute()
const character = route.params.character as string

const inputCharacter = ref<string>(character)

function move() {
  if (inputCharacter.value)
    return navigateTo({
      path: `/search/${inputCharacter.value}`,
    })
}

// TODO: auto header update
</script>

<template>
  <div class="">
    <div class="flex flex-row p-1 md:py-10 md:px-20 items-center justify-center gap-1 md:gap-4">
      <input type="text" placeholder="検索" v-model="inputCharacter" @keyup.enter.prevent="move"
        class=" border-transparent appearance-none border border-gray-300 py-2 px-4 w-2/3 md:w-1/5 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
      <button type="button" @click="move"
        class="w-1/3 md:w-1/12 text-white bg-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black duration-300">{{ $t('search') }}</button>
    </div>

    <!-- Results -->
    <NuxtPage />
  </div>
</template>