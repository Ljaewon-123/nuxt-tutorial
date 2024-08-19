import jwt from 'jsonwebtoken'
import { JwtPayloadRole } from '~~/server/types/token.tyes'

export default defineEventHandler( async event => {

  const config = useRuntimeConfig()
  const atToken = getCookie(event, 'atToken') // rt토큰... 맞는거냐...!!!

  if(atToken){
    
    const jwtVerify = jwt.verify(atToken, config.atSecret) as JwtPayloadRole

    console.log(jwtVerify, 'admin- roles')

    if(jwtVerify.roles != 'admin') return false
    
    // jwtVerify.
  }

  return true
})