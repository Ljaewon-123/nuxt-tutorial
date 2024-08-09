import type { UseFetchOptions } from 'nuxt/app';

export function useLazyCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const fetch = useFetch(url, {
    ...options,
    lazy: true,
    $fetch: $fetch.create({
      async onResponseError({ request, response, options }) {
        const { status } = response
    
        if(status == 401){
          try{
            await $fetch('/api/auth/refresh',{
              method:'POST'
            })
            await fetch.refresh()
          }
          catch{
            throw showError({
              statusCode: 403,
              statusMessage: 'invaild Auth login again'
            })
          }
        }
      }
    })
  })
  
  return fetch
}