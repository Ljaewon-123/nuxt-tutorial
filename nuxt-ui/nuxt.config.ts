// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    experimental: {
      websocket: true
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  runtimeConfig:{
    reids:{
      host: 2179,
      port: 1883
    },
    public:{
      rootPath: process.cwd()
    }
  },
})
