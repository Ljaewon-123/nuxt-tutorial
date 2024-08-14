import { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  experimental: {
    componentIslands: true,
    clientFallback: true
  },

  runtimeConfig:{
    apiUrl : process.env.API_URL,
    atSecret: process.env.AT_SECRET,
  },

  app:{
    head: {
      title: 'Hybrid Rendering'
    }
  },
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        url: "redis://localhost:6379",
      },
    },
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

  modules: ["@nuxt/content", '@nuxtjs/i18n', '@nuxt/image', "vuetify-nuxt-module"],
  vuetify:{
    vuetifyOptions:{
      theme:{
        defaultTheme: 'dark'
      }
    }
  },
  i18n: {
    vueI18n: './app/i18n/i18n.config.ts' // if you are using custom path, default
  },
  plugins:[
    {
      src: '~/plugins/page-auth.ts',
      mode: 'client'
    }
  ],
  future: {
    compatibilityVersion: 4,
  },
})