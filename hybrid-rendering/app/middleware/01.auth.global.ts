import { userTestStore } from "~/stores/test"
import type { $fetchMethod } from "~/types/$fetch-method.type"

export default defineNuxtRouteMiddleware( async (to, from) => {

  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  if(to.name == 'load'){
    // console.log(to)
    // return abortNavigation()
    // console.log('current load')
    return 
  }

  const count = useState('counter', () => {})

  const path = useCookie('path')
  path.value = 'save'

  const  nuxtApp  = useNuxtApp()
  const test = userTestStore(nuxtApp.$pinia)
  const { backFullPath } = storeToRefs(test);
  // preset_cookie.$persist()
  // const test = userTestStore()
// 
  // const { backFullPath } = test
  // test.$subscribe( cb => {
  //   console.log('cb', cb.events)
  // })
  // const obj = computed(() => test.backFullPath)

  // console.log(test, ';@@@@@@@@@@@@@@@@@@@', obj.value)
  backFullPath.value = to
  console.log('global')
  console.log(backFullPath.value ,'pinia in middleware')
  test.getInfo(to)
  count.value = to as any

  test.$state.backFullPath = to
})
