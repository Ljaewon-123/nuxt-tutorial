export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:ssr-client-hints', ({ vuetifyOptions, ssrClientHints, ssrClientHintsConfiguration }) => {
    // your logic here
  })
})