export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],

  build: {
    transpile: ['@headlessui/vue'],
  },

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    preset: 'vercel',
    errorHandler: (error, event) => {
      console.error('Error capturado en Nitro:', error)
    }
  }
})
