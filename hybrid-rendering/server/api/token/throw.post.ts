import { Tokens } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  
  const config = useRuntimeConfig(event)
  
  const atToken = getCookie(event, 'atToken' )
  const data = await $fetch<Tokens>(`${config.apiUrl}/test/throw`, {
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + atToken
    },
  })


  return data
})