import type { NuxtPage } from 'nuxt/schema'

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
  extends: '@nuxt-themes/docus',
  runtimeConfig:{
    apiUrl : process.env.API_URL,
    atSecret: process.env.AT_SECRET,
    rtSecret: process.env.RT_SECRET,
    public:{
      amchartsKey: process.env.AMCHARTS_KEY
    }
  },

  app:{
    head: {
      title: 'Hybrid Rendering'
    },
    pageTransition: { name: "page", mode: "out-in" },
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
  // global보다 좋은점은 적어도 하이드레이트 에러는 안난다는거 하나 최초접근 해결 안됨 
  // global mode: 'client' 여도 error.vue가면 hydrate 에러났었음 
  // .... init load.vue 전략을 사용하면 그냥 글로벌만 있으면 되는거같은데??/
  // 자세한건 서버 통신을 해봐야알겠지만 유력해보임
  // hooks:{
  //   'pages:extend'(pages){
  //     function setMiddleware (pages: NuxtPage[]) {
  //       pages.forEach(page => {
  //         page.meta ||= {}
  //         page.meta.middleware = ['each-page']
  //       })
  //     }
  //     setMiddleware(pages)
  //   }
  // },

  modules: ["@nuxt/content", '@nuxtjs/i18n', '@nuxt/image', "vuetify-nuxt-module", '@pinia/nuxt'],
  vuetify:{
    vuetifyOptions:{
      theme:{
        defaultTheme: 'dark'
      }
    }
  },
  content: {
    highlight: {
      theme: {
        default: "everforest-light",
        dark: "github-dark",
      },
      langs: [
        'javascript',
        'typescript',
        'java'
      ]
  },
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  // plugins:[
  //   {
  //     src: '~/plugins/each-auth.ts',
  //     mode: 'all'
  //   }
  // ],
  devServer:{
    port: 4000
  },
  i18n: {
    vueI18n: './app/i18n/i18n.config.ts' // if you are using custom path, default
  },
  future: {
    compatibilityVersion: 4,
  },
})