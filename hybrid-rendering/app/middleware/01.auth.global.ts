import type { $fetchMethod } from "~/types/$fetch-method.type"

export default defineNuxtRouteMiddleware( async (to, from) => {

  //  검증안하고 싶으면 그냥 return 만 해도 충분 navigatTo 함부로 사용하지 말것 
  // if(to.name == 'login'){
  //   console.log(to)
  //   // return abortNavigation()
  //   return 
  // }

  // console.log('등록')
  // const nuxtApp = useNuxtApp()
  // console.log(nuxtApp,'app')
  // console.log(nuxtApp.isHydrating, '하이드레이트')
  // console.log(nuxtApp.payload.serverRendered, '서버 렌더링?')
  // // 프로젝트 초기 진입시 해결
  // // 초기 진입시 서버 에서 등록을 하게 되는데 
  // // 한번 등록되면 영구적으로 사용하는 느낌 , (새로고침, 초기 진입은 아님 )
  // // 위에 '등록'이라는 서버 로그는 한번만찍힘 즉 초기 서버에서 쿠키 접근이 안됨
  // // cookie -> 만료기간 설정된 redis storage로 사용
  // // 잘 되기만 하면 세션보다 더 많은 장점을 가지게 된다. 
  // // 초기에 관련 유저정보 가져올수없음 ..
  // // 브라우저 로그인 동기화는 구글도 안해놨다.

  // 해결
  // plugins은 mode를 통해 해결 가능 nuxt.config.ts
  // 애초 문제였던 쿠키접근이 될테지만 세션 redis으로 추가 보조 하게 되면 
  // db에 접근하는 nest는 인증절차에 대한 부담이 줄어들고 auth관련일을 nitro서버가 하게 되면서 
  // 부담이 나뉘고 개발하기 쉬워진다.

  // // nuxtApp.isHydrating 초기 접근불가 해결할려면 true여야 하는데 그러면 페이지 이동시 못잡음 
  // if(!nuxtApp.isHydrating){
  //   const verification = await $fetch('/api/auth/verification', {
  //     method:'POST',
  //     server:false,
  //     async onResponseError({ request, response, options }) {
  //       const { status } = response
  //       console.log(response,' response')
  //       if(status == 401){
  //         try{
  //           const data = await $fetch('/api/auth/refresh',{
  //             method:'POST'
  //           })
  //           await $fetch('/api/auth/verification', {method:'POST'})
  //         }
  //         catch(e){
  //           throw showError({
  //             statusCode: 403,
  //             statusMessage: 'invaild Auth login again with page router'
  //           })
  //         }
  //       }
  //     }
  //   })
  // }

  
  
  // console.log(verification, 'verification 쉿!... 확인중 ')

  // const verify = await $fetch('/api/token/cookie-open',{
  //   method:'post'
  // })

  // console.log(verify,'??')

  // if(verify) return verify 

  // return navigateTo('/login')

})
