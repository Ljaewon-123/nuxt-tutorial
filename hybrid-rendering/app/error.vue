<template>
  <v-app>
    <div v-if="props.error.statusCode == 600">
      로딩이야요 GOOD!! very well!
    </div>
    <v-empty-state v-else
      icon="mdi-magnify"
      :headline="String(error.statusCode)"
      :title="error.statusMessage"
      action-text="go awat anna"
      @click:action="handleError"
    ></v-empty-state>
  </v-app>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error:{
    type: Object as () => NuxtError,
    required: true
  }
})

// 만약 여기로 좀 여러 에러가 온다면 refresh 에러만이 쿠키 삭제가 동작하도록 
await callOnce(async () => {
  console.log('This will only be logged once Call Sign')
  // await $fetch('/api/token/delete-all-cookie',{method:'POST'})
})

const handleError = () => clearError({ redirect: '/login' })

onMounted(async() => {
  if( props.error.statusCode == 600){
    const path = useCookie('path')
    const full = path.value.fullPath
    const verification = await $fetch<{ resultcode: number }>('/api/auth/verification', {
      method:'POST',
      async onResponseError({ request, response, options }) {
        const { status } = response
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
    console.log('여기는 토큰이 없는 : 로그인 되지 않은 상태만을 처리해야함 토큰 거부와는 다르게 처리')
    console.log('아래 로직은 초기로딩 or 로그인이 되지 않았을때만 잡아야 이상적이다 ')
    console.log('fetch 요청중에는 로딩이 아니래 error가 제대로 보여야함 ')
    // error.vue -> error.vue 로 다른 코드를 보여주는 것은 불가능 하다. 현재로는
    if(verification.resultcode == 0){
      await clearError({ redirect: full }) // 미리 꺼내놔야 router-view 사용 워닝이 안뜬다... 뭐이런게 다있지;;;
      return
    }
    if(verification.resultcode == -1){
      await clearError({ redirect: '/login' })
      // await createError({statusCode: 401, message: '인증거부'}) // # 안됨 
      return
    }
  }

})


</script>