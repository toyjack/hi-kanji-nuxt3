<script setup lang="ts">

</script>

<template>
  <div class="h-screen flex flex-col">

    <header class="px-2 py-1 md:p-20 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h6 class="text-sm md:text-xl text-white">The Historiographical Institute of the University of Tokyo</h6>
      <h3 class="text-left text-xl md:text-3xl font-serif text-white  uppercase">Historical Characters Database</h3>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex flex-col items-center justify-center">
      <div class="text-sm md:text-base pt-1 md:pt-4 text-center">All images from <a href="https://www.hi.u-tokyo.ac.jp/en/" target="blank" class="underline">The
          Historiographical Institute of the University of Tokyo</a></div>
      <div class="text-sm md:text-base p-2 md:p-4">Copyright 2022 <a href="https://researchmap.jp/liuguanwei" target="blank"
          class="underline">Guanwei
          Liu</a></div>
    </footer>
  </div>
</template>