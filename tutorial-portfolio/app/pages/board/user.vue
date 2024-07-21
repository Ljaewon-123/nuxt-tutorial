<template>
  <div>
    user user user user 부모 
    <nuxt-page ></nuxt-page>
  </div>
</template>

<script setup lang="ts">
// keepalive랑 은 pageTransition이 통하는 범위까지만 가능하다고 생각 
definePageMeta({
  keepalive: {
    include: ['keep-alive']  // or true 지정할거면 include사용 
  },
  pageTransition: {
    name: 'rotate'
  },
}) // keep-alive 는 부모에서 해야함 , key를 사용하면 안되는거 같네;
</script>