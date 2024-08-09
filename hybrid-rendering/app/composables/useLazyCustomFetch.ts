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

        //  401 아닌것들은 처리 어떻게?? 모달? 아니면 페이지 이동?


      }
    })
  })
  
  return fetch
}