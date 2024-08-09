export default defineNuxtRouteMiddleware((to, from) => {

  const cookie = useCookie('atToken')
  
  console.log('when i play?.... 서버쪽에서 실행되어야하네 ')
  

})
