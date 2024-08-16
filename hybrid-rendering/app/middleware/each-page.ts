import { userTestStore } from "~/stores/test"

export default defineNuxtRouteMiddleware( async (to, from) => {
  
  if(to.name == 'login'){
    // console.log(to)
    // return abortNavigation()
    return 
  }
  
  // const test = userTestStore()
  // test.$subscribe( cb => {console.log('cb', cb)})
  // const { backFullPath } = test
  // backFullPath.value = to
  // console.log(test, backFullPath.value,';@@@@@@@@@@@@@@@@@@@')

  if(to.name == 'load') return

  // const { backFullPath } = storeToRefs(userTestStore());
  // backFullPath.value = to

  // console.log('each-page register!!!!', backFullPath.value)
  
  const verification = await $fetch('/api/auth/verification', {
    method:'POST',
    async onResponseError({ request, response, options }) {
      const { status } = response
      // console.log(response,' response')
      if(status == 401){
        try{
          const data = await $fetch('/api/auth/refresh',{
            method:'POST'
          })
          await $fetch('/api/auth/verification', {method:'POST'})
        }
        catch(e){
          throw showError({
            statusCode: 403,
            statusMessage: 'invaild Auth login again with page router'
          })
        }
      }
    }
  })

  console.log(verification.isInit)

  if(verification.isInit) return navigateTo('/load')

  // console.log('path!!!!!!!!!!!!!!!!!!!!!!')
  // console.log(to)
  // return abortNavigation()

})