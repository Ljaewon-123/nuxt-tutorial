export default defineNuxtRouteMiddleware( async (to, from) => {
  return 
  if(to.name == 'login'){
    // console.log(to)
    // return abortNavigation()
    return 
  }
  
  if(to.name == 'load') return
  
  let code = 0

  // onResponseError.... 미들웨어는 throw가 발생하면 이후 일을 처리한다 
  // 인터셉터가 작동되기는 하는데 미들웨어 동작에는 영향을 주지않게 동작하는거 같다.
  try{
    const verification = await $fetch('/api/auth/verification', {
      method:'POST',
      async onResponseError({ request, response, options }) {
        const { status } = response
        code = status
        console.log(status, ' response')
      }
    })

    console.log(verification, 'global middle')

    if(verification.isInit) {
      const path = useCookie('path')
      path.value = JSON.stringify(to)
      code = 600
      return abortNavigation({statusCode: 600, statusMessage: 'loading'}) // .... catch로 던진다. 
    }
  }
  catch{
    console.log('???',code)
    if(code == 600){
      return abortNavigation({statusCode: 600, statusMessage: 'loading'}) // error.vue 를 로딩처럼 쓰는법 도 있다  
    }
    if(code == 401){
      try{
        await $fetch('/api/auth/refresh',{ method:'POST' })
        const verification = await $fetch('/api/auth/verification', {method:'POST'})

        console.log(verification, 'global middle 2차시도')
        return
      }
      catch(e){
        throw showError({
          statusCode: 403,
          statusMessage: 'invaild Auth login again with page router'
        })
      }
    }

    console.log('!!!', code)

    throw showError({
      statusCode: 500,
      statusMessage: 'fin out'
    })

  }


})