<template>
  <div>
    loading...
  </div>
</template>

<script setup lang="ts">
import { userTestStore } from '~/stores/test';

// 인라인 미들 못씀 똑같아서 
definePageMeta({
  layout: false,
  // middleware:[
  //   async (to, form)=>{
  //       const verification = await $fetch('/api/auth/verification', {
  //       method:'POST',
  //       async onResponseError({ request, response, options }) {
  //         const { status } = response
  //         // console.log(response,' response')
  //         if(status == 401){
  //           try{
  //             const data = await $fetch('/api/auth/refresh',{
  //               method:'POST'
  //             })
  //             await $fetch('/api/auth/verification', {method:'POST'})
  //           }
  //           catch(e){
  //             throw showError({
  //               statusCode: 403,
  //               statusMessage: 'invaild Auth login again with page router'
  //             })
  //           }
  //         }
  //       }
  //     })
  //   }
  // ]
})

const route = useRoute()
const router = useRouter()

const test = userTestStore()
const { backFullPath } = test
const count = useState('counter', () => {})
const path = useCookie('path')
onMounted(async() => {
  // backFullPath.value = '뭔데 '
  console.log('cookie', path.value)
  console.log(path.value.name)
  // const done = await $fetch('/api/token/cookie-set')
  // console.log(done, 'set done')
  // console.log('state', count.value)
  // console.log('pinia', test)
  // console.log('클라단', route)
  // console.log('router', router.options.history)
  const verification = await $fetch<{ resultcode: number }>('/api/auth/verification', {
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
  console.log(verification,'!!', verification.resultcode == 0)
  // 초기 접근시 로딩 -> 원래 요청 화면 
  if(verification.resultcode == 0){
    await navigateTo({ name: path.value.name })
  }
})



</script>