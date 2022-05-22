<script setup lang="ts">

</script>

<template>
  <div class="w-full h-screen mx-auto flex flex-col overflow-hidden justify-between">

    <header class="px-5 py-10 md:p-20 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h6 class="md:text-xl text-white">The Historiographical Institute of the University of Tokyo</h6>
      <h3 class="text-left text-2xl md:text-3xl font-serif text-white  uppercase">Historical Characters Database</h3>
    </header>

    <main class="flex-grow overflow-auto">
      <slot />
    </main>

    <footer class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex flex-col items-center justify-center">
      <div class="pt-4">All images from <a href="https://www.hi.u-tokyo.ac.jp/en/" target="blank" class="underline">The
          Historiographical Institute of the University of Tokyo</a></div>
      <div class="p-4">Copyright 2022 <a href="https://researchmap.jp/liuguanwei" target="blank"
          class="underline">Guanwei
          Liu</a></div>
    </footer>
  </div>
</template>