export default defineNuxtRouteMiddleware( async (to, from) => {

  const customer = await $fetch('/api/auth/customer-roles')
  console.log('cuscustomer', customer)

  if(!customer) return abortNavigation({statusCode: 404, statusMessage:'hihi'})

  return
})