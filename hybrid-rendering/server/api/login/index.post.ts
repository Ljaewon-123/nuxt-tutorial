import { Tokens } from "~~/server/types/token.tyes"

export default defineEventHandler(async event => {
  
  const config = useRuntimeConfig(event)

  // const cookies = parseCookies(event)
  // console.log(cookies)
  // const atToken = useCookie('vistor')
  // const rtToken = useCookie('rtToken')
  
  const body = await readBody(event)
  const data = await $fetch<Tokens>(`${config.apiUrl}/auth/local/signin`, {
    method: 'post',
    body
  })

  setCookie(event, 'atToken', data.access_token)
  setCookie(event, 'rtToken', data.refresh_token)
  // setCookie(event, 'toekn', cooies)

  console.log('fetch')
  
  return data
})