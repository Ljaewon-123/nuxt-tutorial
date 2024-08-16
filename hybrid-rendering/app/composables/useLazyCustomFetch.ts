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
        // console.log(response, '@@@@@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!!!')
        
        // 무한 loop예방을 위한 커스텀 예외 코드 
        if(status == 401){
          try{
            await $fetch('/api/auth/refresh',{
              method:'POST'
            })
            // 잘못하면 무한 loop 에러조심 
            await fetch.refresh()
          }
          catch{
            throw showError({
              statusCode: 403,
              statusMessage: 'invaild Auth login again'
            })
          }
        }

        //  401 아닌것들은 처리 어떻게?? 모달? 아니면 페이지 이동?
        // 서버에서 전해주는 에러메시지 받기 
        throw createError({
          statusCode: status,
          message: response._data.data.message
        })

      }
    })
  })
  
  return fetch
}