export default defineNuxtRouteMiddleware( async (to, from) => {

  
  const admin = await $fetch('/api/auth/admin-roles')
  
  console.log('adadadadmin', admin)

  if(!admin) {
    console.log('왜 안먹지;;')
    throw showError({
      statusCode:404
    })
    return abortNavigation('Insufficient permissions.') // 왜 이렇게 문서랑 다르게 안되냐 
    // return abortNavigation({statusCode: 404, statusMessage:'admin permi'})
  }

})