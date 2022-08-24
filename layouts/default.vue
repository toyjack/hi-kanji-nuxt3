<script setup lang="ts">
const route =  useRoute()
</script>

<template>
  <div class="h-screen flex flex-col">

    <header class="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-between">
      <div class="flex flex-row justify-between px-2 pt-7 pb-2 md:p-20 ">
        <div class="flex flex-col">
          <h6 class="text-sm md:text-xl text-white">{{ $t('index.hiut') }}</h6>
          <h3 class="text-left text-xl md:text-3xl font-serif text-white  uppercase">
            <NuxtLink to="/" class="hover:underline">{{ $t('index.title') }}</NuxtLink>
          </h3>
        </div>
        <div class="pt-4 pr-1 flex flex-row">
          <LangButton />
        </div>
      </div>

      <div class="tabs md:px-20">
        <NuxtLink class="tab tab-lifted" to="/" activeClass="tab-active">{{ $t('home') }}</NuxtLink>
        <NuxtLink class="tab tab-lifted" to="/search" activeClass="tab-active">{{ $t('search') }}</NuxtLink>
        <NuxtLink class="tab tab-lifted" to="/ids" activeClass="tab-active">IDS</NuxtLink>
        <NuxtLink class="tab tab-lifted" to="/list" activeClass="tab-active">{{ $t('list') }}</NuxtLink>
        <NuxtLink class="tab tab-lifted" to="/about" activeClass="tab-active">{{ $t('about') }}</NuxtLink>
      </div>

    </header>



    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex flex-col items-center justify-center">
      <div class="text-sm md:text-base pt-5 md:pt-4 text-center">{{ $t('index.allImg') }} <a
          href="https://www.hi.u-tokyo.ac.jp/en/" target="blank" class="underline">{{ $t('index.fromHiut') }}</a></div>
      <div class="text-sm md:text-base p-2 md:p-4">Copyright 2022 <a href="https://researchmap.jp/liuguanwei"
          target="blank" class="underline">{{ $t('author') }}</a></div>
    </footer>
  </div>
</template>