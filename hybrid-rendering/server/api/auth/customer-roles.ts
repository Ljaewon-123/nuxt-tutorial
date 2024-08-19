import jwt from 'jsonwebtoken'
import { JwtPayloadRole } from '~~/server/types/token.tyes'

export default defineEventHandler( async event => {

  const config = useRuntimeConfig()
  const atToken = getCookie(event, 'atToken')

  if(atToken){
    
    const jwtVerify = jwt.verify(atToken, config.atSecret) as JwtPayloadRole

    // console.log(jwtVerify, 'customer- roles')

    if(jwtVerify.roles != 'customer') return false
    
    console.log('?')
    // jwtVerify.
  }

  return true
})