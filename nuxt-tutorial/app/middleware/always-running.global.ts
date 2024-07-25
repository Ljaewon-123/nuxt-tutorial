export default defineNuxtRouteMiddleware(
  (to, from) => {
    console.log('Global Middlware Router')
  }
)

// 글로벌 미들 -> 파일 미들 (작성순서 == ) 인라인 미들 
// 글로벌 끼리는 문자열 아스키코드 기준으로 되는듯 
