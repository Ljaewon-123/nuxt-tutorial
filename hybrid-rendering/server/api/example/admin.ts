import { accessCookieOptions } from "~~/server/options/cookie.option"
import { TempToken } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  
  const config = useRuntimeConfig(event)
  const body = await readBody(event)
  const atToken = getCookie(event, 'atToken' )
  const data = await $fetch(`${config.apiUrl}/evo/admin`, {
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + atToken
    },
    body
  })

  return data
})