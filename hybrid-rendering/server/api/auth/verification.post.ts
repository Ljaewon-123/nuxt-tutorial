import { accessCookieOptions } from "~~/server/options/cookie.option"
import { Tokens } from "~~/server/types/token.tyes"
import { v4 as uuidv4 } from 'uuid';
import { navigateTo, useNuxtApp } from "nuxt/app";

export default defineEventHandler( async event => {
  const config = useRuntimeConfig(event)
  // const url = getRequestURL(event)
  // console.log(url, 'url !!!!')
  // await new Promise((res, rej) => {
  //   setTimeout(res, 3000)
  // })
  // 기다린다고 되는게 아니라 특정 훅을 넘여야함 근데 초기 init 훅에서는 접근 안됨 

  // const cookie = parseCookies(event)
  // console.log(cookie,'parsecookie 쿠키 옵션과 무관하게 안나옴')
  // ? undefined getCookie
  // true
  // ? test getCookie
  const atToken = getCookie(event, 'atToken')
  console.log('?', atToken, 'getCookie')
  // console.log(atToken, 'access token 로그인상태 예상 ?')
  // 어찌 보면 좋은 방법인데 에러 코드가 무조건 500으로 고정됨.. 이러면 커스텀 할수가 없음 
  // if(!atToken) {
  //   await sendRedirect(event,'roles') // HMR?? 요청중에는 동작안함 
  //   throw createError({
  //     statusCode: 999,
  //     message:'loading'
  //   })
  // }
  if(!atToken) return { isInit: true, resultcode: -1 }

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

  // ....갑자기 그냥 되네...? 나의 노력과 고민과 시간은???? 
  // 로그인시에는 이제 되는데 로그인 안되었을때 접근은 여전히 문제임 
  const data = await $fetch<any>(`${config.apiUrl}/auth/local/signature`,{
    method: 'post',
    headers:{
      'Authorization' : 'Bearer ' + atToken
    },
  })
  console.log(data,'!')
  data.resultcode == 0
  return { isInit: false, resultcode: 0 }
  // return 'done'
})