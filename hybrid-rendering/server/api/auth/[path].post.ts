import { accessCookieOptions } from "~~/server/options/cookie.option"
import { Tokens } from "~~/server/types/token.tyes"
import { v4 as uuidv4 } from 'uuid';
import { navigateTo, useNuxtApp } from "nuxt/app";

export default defineEventHandler( async event => {
  const config = useRuntimeConfig(event)
  const name = getRouterParam(event, 'name')

  const atToken = getCookie(event, 'atToken')
  console.log('? dynamic')
  
  if(!atToken) return { isInit: true, resultcode: -1 }

  // console.log(event,' evenet ga')
  const data = await $fetch<any>(`${config.apiUrl}/auth/local/signature`,{
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + atToken
    },
  })
  console.log(data,'!')
  data.resultcode == 0
  return { isInit: false, resultcode: data.resultcode }
  // return 'done'
})