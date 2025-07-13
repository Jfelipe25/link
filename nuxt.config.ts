export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],

  build: {
    transpile: ['@headlessui/vue'],
  },

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    // sin preset: evita usar edge functions de Vercel
  }
})
