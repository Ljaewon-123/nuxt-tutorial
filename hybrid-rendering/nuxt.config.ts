import { transformAssetUrls } from 'vite-plugin-vuetify'
import setupVuetify from './setupvuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig:{
    apiUrl : process.env.API_URL
  },

  app:{
    head: {
      title: 'Hybrid Rendering'
    }
  },

  routeRules:{
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Products page generated on demand, revalidates in background, cached until API response changes
    '/products': { swr: true },
    // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    '/products/**': { swr: 3600 },
    // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    '/blog': { isr: 3600 },
    // Blog post page generated on demand once until next deployment, cached on CDN
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/old-page': { redirect: '/new-page' },
  },

  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  modules: [setupVuetify(), "@nuxt/content", '@nuxtjs/i18n', '@nuxt/image'],
  i18n: {
    vueI18n: './app/i18n/i18n.config.ts' // if you are using custom path, default
  }
})