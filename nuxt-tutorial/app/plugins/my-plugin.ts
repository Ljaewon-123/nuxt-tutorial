export default defineNuxtPlugin(() => {

  addRouteMiddleware((to, from) => {
    // console.log('h2')
    if(to.path === '/database') return abortNavigation('Forbidden')
  })

  addRouteMiddleware('jaewon', (to, from) => {
    const name = to.params.name
    if(name == 'jaewon') return abortNavigation('The name jaewon is not allowed')
  })


})

// 동적 route 정의 가능 