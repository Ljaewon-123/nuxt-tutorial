<template>
  <div>
    This page is about me
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About'
})

// 거이 before router인데?? 도달하기 전에 log를 찍음 물론 둘다 동일한 결과같음
definePageMeta({
  middleware: [
    (to, from) => {
      console.log('Inline Middlware')
    },
    'middleware-example',
  ]
})
</script>