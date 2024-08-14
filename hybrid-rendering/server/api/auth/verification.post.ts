import { cookieOptions } from "~~/server/options/cookie.option"
import { Tokens } from "~~/server/types/token.tyes"
import { v4 as uuidv4 } from 'uuid';
import { useNuxtApp } from "nuxt/app";

export default defineEventHandler( async event => {
  const config = useRuntimeConfig(event)

  // await new Promise((res, rej) => {
  //   setTimeout(res, 3000)
  // })
  // 기다린다고 되는게 아니라 특정 훅을 넘여야함 근데 초기 init 훅에서는 접근 안됨 

  
  const atToken = getCookie(event, 'atToken')
  console.log(atToken)
  // await useStorage('redis').setItem('foo:world', { hello: 'world' },{ ttl: 30 })
  // await useStorage('redis').setItem('foo:world', { hello: 'world' })
  // const redis = await useStorage('redis').getItem('foo:world')
  // await useStorage('data').setItem('foo', { hello: 'world' }) // 파일 시스템에 쓰기 만료기간 때문에 redis선호 

  // const session = await useSession(event, {
  //   password: "80d42cfb-1cd2-462c-8f17-e3237d9027e9",
  // });
  // const count = (session.data.count || 0) + 1;
  // await session.update({
  //   count: count,
  // });
  // // await session.clear();
  
  // console.log('@!!!!!!!!!!!!!!!!!!!!!!@')
  // console.log(session, 'session')
  // console.log(session.id , 'id')
  // console.log(session.data , 'data')
  // console.log('@!!!!!!!!!!!!!!!!!!!!!!@')

  // console.log(atToken, 'attoken', 'session', session)
  // 초기 server-side에서 쿠키 비어있는 문제 

  const data = await $fetch<boolean>(`${config.apiUrl}/auth/local/signature`,{
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + atToken
    },
  })

  return data
  // return 'done'
})