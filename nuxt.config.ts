import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  buildModules: [
    '@pinia/nuxt',
  ],
  types: [
    "@pinia/nuxt"
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})