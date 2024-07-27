// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  css:[
    '~/assets/styles/style.css'
  ],

  modules: ['@nuxtjs/tailwindcss'],
  app:{
    pageTransition: {
      name: 'page',
      mode: 'in-out'
    },
    layoutTransition: {
      name: 'page',
      mode: 'in-out'
    }
  },
  // app:{
  //   head:{
  //     charset: 'utf-8',
  //     viewport: 'width=device-width, inital-scale=1',
  //     title: 'Nuxt app',
  //     meta:[
  //       name: 'description',
  //       content: 'Nuxt Course'
  //     ],
  //     link:[
  //       {
  //         rel: 'stylesheet',
  //         href: '~/assets/styles/style.css'
  //       }
  //     ]
  //   },
  // }
})