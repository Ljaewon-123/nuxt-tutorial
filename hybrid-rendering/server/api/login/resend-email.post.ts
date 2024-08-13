import { cookieOptions } from "~~/server/options/cookie.option"
import { TempToken } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  
  const config = useRuntimeConfig(event)
  const tempToken = getCookie(event, 'temp' )
  const data = await $fetch<TempToken>(`${config.apiUrl}/auth/email/verification`, {
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + tempToken
    },
  })

  setCookie(event, 'temp', data.token , {
    ...cookieOptions,
    maxAge: 60 * 3 // 3m 
  })


  return data
})