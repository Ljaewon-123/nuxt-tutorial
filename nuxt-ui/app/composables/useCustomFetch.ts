import type { UseFetchOptions } from 'nuxt/app';

// 제대로 찾아보고 다시 
export function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const fetch = useFetch(url, {
    ...options,
    $fetch: $fetch.create({
      async onResponseError({ request, response, options }) {

        const { status } = response
        // api custom code 
        if(status == 401){
          try{
            await $fetch('/api/auth/refresh',{
              method:'POST'
            })
            await fetch.refresh()
          }
          catch{
            throw showError({
              statusCode: status,
              statusMessage: 'invaild Auth login again'
            })
          }
        }
      }
    })
  })

  return fetch
}