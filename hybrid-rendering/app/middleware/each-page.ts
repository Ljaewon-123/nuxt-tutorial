export default defineNuxtRouteMiddleware( async (to, from) => {
  if(to.name == 'login'){
    console.log(to)
    // return abortNavigation()
    return 
  }

  console.log('each-page register')
  
  const verification = await $fetch('/api/auth/verification', {
    method:'POST',
    async onResponseError({ request, response, options }) {
      const { status } = response
      console.log(response,' response')
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
})