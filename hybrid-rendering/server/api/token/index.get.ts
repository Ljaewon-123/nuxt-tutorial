import { Tokens } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  // console.log(event.context,'확인가능')
  const config = useRuntimeConfig(event)
  
  const query = getQuery(event)
  const atToken = getCookie(event, 'atToken' )
  const data = await $fetch<Tokens>(`${config.apiUrl}/evo`, {
    method: 'get',
    headers:{
      'Authorization' : 'Bearer ' + atToken
    },
    query,
    
  })


  return data
})