import { createI18n } from 'vue-i18n'

import messages from '../i18n'

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages,
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
})