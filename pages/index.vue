<script setup lang="ts">
const hanzi = ref<string>("東")

function move() {
  return navigateTo({
    path: `/search/${hanzi.value}`,
  })
}
</script>

<template>
  <div class="overflow-hidden h-full w-screen
      bg-[url('https://clioimg.hi.u-tokyo.ac.jp/viewer/image/idata/000/0073/10/8/00000005.jpg')] 
      bg-fixed bg-cover bg-[left_calc(100%)_top_calc(50%)]  items-center">

    <div class="flex flex-col items-center justify-between min-h-full pt-8">
      <div class="flex flex-col">
        <div class="flex flex-row mb-auto pt-4 gap-2">
          <input type="text" v-model="hanzi"
            class="border-transparent appearance-none border border-gray-300 py-2 px-4 w-2/3 md:w-3/5 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <button class="btn btn-primary" @click="move">{{ $t('button.search') }}</button>
        </div>

        <div class="flex flex-row mb-auto pt-4 gap-4">
          <NuxtLink to="/list" class="btn btn-primary">字種リスト</NuxtLink>
          <button class="btn btn-primary">漢字部品で検索</button>
        </div>
      </div>

      <div class="px-1 md:p-2 self-end items-end bg-black opacity-20 rounded ">
        <p class="text-xs md:text-base text-white underline text-right"><a
            href="https://clioimg.hi.u-tokyo.ac.jp/viewer/view/idata/000/0073/10/8/00000005?m=limit&n=20"
            target="blank">{{ $t('index.bgImage') }}</a></p>
      </div>
    </div>
  </div>

</template>