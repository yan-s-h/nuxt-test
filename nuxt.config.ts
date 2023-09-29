import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins?.push(vuetify())
    }
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs']
      }
    ]
  ]
})
