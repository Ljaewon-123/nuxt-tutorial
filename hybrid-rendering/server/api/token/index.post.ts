import { Tokens } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  
  const config = useRuntimeConfig(event)
  
  const body = await readBody(event)
  const atToken = getCookie(event, 'atToken' )
  const data = await $fetch<Tokens>(`${config.apiUrl}/evo`, {
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + atToken
    },
    body
  })


  return data
})