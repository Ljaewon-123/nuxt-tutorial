import type { UseFetchOptions } from 'nuxt/app';

export function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const fetch = useFetch(url, {
    ...options,
    $fetch: $fetch.create({
      async onResponseError({ request, response, options }) {
        const atToken = useCookie('atToken')
        const rtToken = useCookie('rtToken')

        const { status } = response
    
        if(status == 401){
          try{
            await $fetch('/api/auth/refresh',{
              method:'POST'
            })
            await fetch.refresh()
          }
          catch{
            atToken.value = null;
            rtToken.value = null;
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