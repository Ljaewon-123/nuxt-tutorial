import { cookieOptions } from "~~/server/options/cookie.option"
import { Tokens } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  
  const config = useRuntimeConfig(event)
  const tempToken = getCookie(event, 'temp' )
  const body = await readBody(event)
  const data = await $fetch<Tokens>(`${config.apiUrl}/auth/email/verification`, {
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + tempToken
    },
    body
  })

  setCookie(event, 'temp', '', {
    ...cookieOptions,
    maxAge: 0
  })

  console.log('@@@@@@@@@@@@@@')
  // setCookie(event, 'atToken', data.access_token, cookieOptions)
  // setCookie(event, 'rtToken', data.refresh_token, cookieOptions)


  
  return data
})