import { cookieOptions } from "~~/server/options/cookie.option"

export default defineEventHandler( event => {

  const atToken = setCookie(event, 'atToken', '', {
    ...cookieOptions,
    maxAge: 0
  })
  const rtToken = setCookie(event, 'rtToken', '', {
    ...cookieOptions,
    maxAge: 0
  })

  return 'done'
})