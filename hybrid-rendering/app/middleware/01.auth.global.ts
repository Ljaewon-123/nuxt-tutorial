export default defineNuxtRouteMiddleware( async (to, from) => {

  
  console.log('언제 실행?', to)
  
  // if(to.name == 'login') {
  //   return 
  // }

  // const verify = await $fetch('/api/token/cookie-open',{
  //   method:'post'
  // })

  // console.log(verify,'??')

  // if(verify) return verify 

  // return navigateTo('/login')

})
