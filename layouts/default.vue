<script setup lang="ts">
</script>

<template>
  <div class="h-screen flex flex-col">

    <header class="px-2 py-1 md:p-20 bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row justify-between">
      <div>
        <h6 class="text-sm md:text-xl text-white">{{ $t('index.hiut') }}</h6>
        <h3 class="text-left text-xl md:text-3xl font-serif text-white  uppercase">
          <NuxtLink to="/" class="hover:underline">{{ $t('index.title') }}</NuxtLink>
        </h3>
      </div>

     <LangButton />
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex flex-col items-center justify-center">
      <div class="text-sm md:text-base pt-1 md:pt-4 text-center">{{ $t('index.allImg') }} <a
          href="https://www.hi.u-tokyo.ac.jp/en/" target="blank" class="underline">{{ $t('index.fromHiut') }}</a></div>
      <div class="text-sm md:text-base p-2 md:p-4">Copyright 2022 <a href="https://researchmap.jp/liuguanwei"
          target="blank" class="underline">{{ $t('author') }}</a></div>
    </footer>
  </div>
</template>