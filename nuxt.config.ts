import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/tailwind.css',
    // '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // head is not working
  head: {
    charset: "utf-8888",
    link: [
      { rel: 'stylesheet', type:"text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'}
      // { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'}
    ],
  },
  
  tailwindcss: {
    jit: true,
  }
})
