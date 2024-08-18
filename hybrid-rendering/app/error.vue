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
    console.log('왜안됨!!!!!!!!')
    console.log(verification,'!!', verification.resultcode == 0)
    // 초기 접근시 로딩 -> 원래 요청 화면 
    if(verification.resultcode == 0){
      console.log(path.value, 'fullpath', path.value.fullPath)
      // clearError({ redirect: '/login' })
      await clearError({ redirect: full }) // 미리 꺼내놔야 router-view 사용 워닝이 안뜬다... 뭐이런게 다있지;;;
      // return await navigateTo({name: path.value.name})
    }
  }

})


</script>