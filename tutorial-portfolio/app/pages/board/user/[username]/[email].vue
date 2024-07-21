<template>
<div>
  <span>
    {{ route.params }}
  </span>
  <br>
  <span>
    <button @click="push" >click</button>
  </span>
</div>

</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const push = () => {
  //  둘다 됨
  router.push(`/board/user/${'aa'}/${'123-123'}`)
  // router.push({ name: 'board-user-username-email', params: { username: 'aa', email: '21-3123' } })
}
console.log('email view', '기존 vue랑 다르게 캐시안하고 재생산하나봄 ;; 왜지 ')
watch(() => route.params, () =>{
  console.log('번경', route.params, '@@@@@@@@@@@@@@@@@@@@@')
})
</script>