import { userTestStore } from "~/stores/test"
import type { $fetchMethod } from "~/types/$fetch-method.type"

export default defineNuxtRouteMiddleware( async (to, from) => {

  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  // if(to.name == 'load'){
  //   // console.log(to)
  //   // return abortNavigation()
  //   // console.log('current load')
  //   return 
  // }

  // const done = await $fetch('/api/token/cookie-set')
  // console.log('??')
  // console.log(done)
  //  혹시 쿠키 보안 옵션때문일까봐 다시 해봤는데 여전히 undefined 값을 확인하고 해도 마찬가지 여기서는 안되는게 맞다.
  // const done2 = await $fetch('/api/token/cookie-get')
  // console.log(done2, 'get')

  // const count = useState('counter', () => {})

  // const path = useCookie('path')
  // path.value = 'save'


  // const test = userTestStore()
// 
  // const { backFullPath } = test
  // test.$subscribe( cb => {
  //   console.log('cb', cb.events)
  // })
  // const obj = computed(() => test.backFullPath)


})
