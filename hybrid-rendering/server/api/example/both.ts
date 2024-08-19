import { accessCookieOptions } from "~~/server/options/cookie.option"
import { TempToken } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  
  const config = useRuntimeConfig(event)
  const atToken = getCookie(event, 'atToken' )
  const body = await readBody(event)
  const data = await $fetch(`${config.apiUrl}/evo/both`, {
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + atToken
    },
    body
  })

  return data
})