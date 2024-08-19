import { accessCookieOptions } from "~~/server/options/cookie.option"
import { TempToken } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  
  const config = useRuntimeConfig(event)
  const body = await readBody(event)
  const atToken = getCookie(event, 'atToken' )
  const data = await $fetch(`${config.apiUrl}/evo/customer`, {
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + atToken
    },
    body:body
  })

  return data
})