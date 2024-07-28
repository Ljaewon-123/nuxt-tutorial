// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {compatibilityVersion: 4},
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig:{
    accessToken: process.env.accessToken
  },
  app:{
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: "https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css"
        }
      ],
      script: [
        {
          src:"https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"
        }
      ]
    }
  }
})
