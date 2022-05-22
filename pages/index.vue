<script setup lang="ts">
const hanzi = ref<string>("天")

function move() {
  return navigateTo({
    path: `/search/${hanzi.value}`,
  })
}
</script>

<template>
  <div
    class="overflow-hidden h-full w-screen bg-cover bg-origin-border bg-no-repeat bg-center bg-fixed items-center"
    style="background-image: url(https://clioimg.hi.u-tokyo.ac.jp/viewer/image/idata/000/0073/10/8/00000005.jpg);">

    <!-- <div class="p-8"></div> -->
    <div class="flex flex-col items-center justify-between h-full">
      <div class="py-4">
        <p
          class="font-extrabold text-3xl text-center md:text-6xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
          Search all characters
        </p>
      </div>

      <div class="flex flex-row mb-auto pt-4 gap-2">
        <input type="text" v-model="hanzi" class="focus:border-blue-500 rounded">
        <button @click="move"
          class="p-2 mb-auto text-white bg-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black duration-300">Search</button>
      </div>

      <div class="pt-2 self-end items-end bg-black opacity-20">
        <p class="text-white underline "><a
            href="https://clioimg.hi.u-tokyo.ac.jp/viewer/image/idata/000/0073/10/8/00000005.jpg" target="blank">Background Image:
            愚昧記 三条実房(自筆) S0073-10</a></p>
      </div>
    </div>
  </div>

</template>