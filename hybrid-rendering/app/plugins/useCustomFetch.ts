import type { $fetchMethod } from "~/types/$fetch-method.type"

// 이거 사용 안함 ******************************

export default defineNuxtPlugin(() => {
  const $customFetch = $fetch.create({
    async onResponseError({ request, response, options }) {
      const { status } = response
  
      if(status == 401){
        try{
          const data = await $fetch('/api/auth/refresh',{
            method:'POST'
          })
          await $fetch(
            request, 
            {
              ...options,
              method: options.method as $fetchMethod
            }
          )
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

  return {
    provide: {
      customFetch: $customFetch
    }
  }
})