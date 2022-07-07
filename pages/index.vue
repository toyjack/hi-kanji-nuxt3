<script setup lang="ts">
const hanzi = ref<string>("東")

function move() {
  return navigateTo({
    path: `/search/${hanzi.value}`,
  })
}
</script>

<template>
  <div class="overflow-hidden h-full w-screen bg-cover bg-origin-border bg-no-repeat bg-center bg-fixed items-center"
    style="background-image: url(https://clioimg.hi.u-tokyo.ac.jp/viewer/image/idata/000/0073/10/8/00000005.jpg);">

    <div class="flex flex-col items-center justify-between h-full">
      <div class="py-4">
        <p
          class="font-extrabold text-3xl text-center md:text-6xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
          {{ $t('index.search-all-characters') }} </p>
      </div>

      <div class="flex flex-row mb-auto pt-4 gap-2">
        <input type="text" v-model="hanzi"
          class="border-transparent appearance-none border border-gray-300 py-2 px-4 w-2/3 md:w-3/5 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <button @click="move"
          class="p-2 mb-auto text-white bg-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black duration-300">{{
          $t('button.search') }}</button>
      </div>

      <div class="flex flex-row mb-auto pt-4 gap-4">
        <NuxtLink to="/list" class="btn bg-blue-500 border-white">字種リスト</NuxtLink>
        <button class="btn bg-blue-500 border-white">漢字部品で検索</button>
      </div>

      <div class="px-1 md:p-2 self-end items-end bg-black opacity-20 rounded ">
        <p class="text-xs md:text-base text-white underline text-right"><a
            href="https://clioimg.hi.u-tokyo.ac.jp/viewer/view/idata/000/0073/10/8/00000005?m=limit&n=20"
            target="blank">{{$t('index.bgImage')}}</a></p>
      </div>
    </div>
  </div>

</template>