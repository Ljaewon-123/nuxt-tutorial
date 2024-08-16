import { accessCookieOptions } from "~~/server/options/cookie.option"
import { IdTokens, Tokens } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  
  const config = useRuntimeConfig(event)
  const tempToken = getCookie(event, 'temp' )
  const body = await readBody(event)
  const data = await $fetch<IdTokens>(`${config.apiUrl}/auth/email/verification`, {
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + tempToken
    },
    body,
  })

  deleteCookie(event, "temp");
  // setCookie(event, 'temp', '', {
  //   ...cookieOptions,
  //   maxAge: 0
  // })

  // console.log('@@@@@@@@@@@@@@', data)
  // await useStorage('redis').setItem(`${data.userId}`, { hello: 'world' },{ ttl: 60 * 15 })
  setCookie(event, 'atToken', data.access_token, accessCookieOptions)
  setCookie(event, 'rtToken', data.refresh_token, accessCookieOptions)


  
  return data
})