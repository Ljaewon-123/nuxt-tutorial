export default defineNuxtPlugin((nuxtApp) => {
  addRouteMiddleware('page-auth', async(to ,from) => {
    if(to.name == 'login'){
      console.log(to)
      // return abortNavigation()
      return 
    }
    
    const verification = await $fetch('/api/auth/verification', {
      method:'POST',
      server:false,
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
  }, {global: true})
})