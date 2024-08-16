import { cookieOptions } from "~~/server/options/cookie.option"
import { Tokens } from "~~/server/types/token.tyes"

export default defineEventHandler( async event => {
  
  const config = useRuntimeConfig(event)
  const rtToken = getCookie(event, 'rtToken')
  const data = await $fetch<Tokens>(`${config.apiUrl}/auth/refresh`,{
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + rtToken
    },
  })

  console.log('refresh token')

  setCookie(event, 'atToken', data.access_token, cookieOptions)
  setCookie(event, 'rtToken', data.refresh_token, cookieOptions)

  return data
})