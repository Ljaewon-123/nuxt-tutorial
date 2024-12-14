export default defineNuxtPlugin((nuxtApp) => {

  // const url = useRuntimeConfig.public.baseURL

  const api = $fetch.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api
    }
  }
})
