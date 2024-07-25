<template>
  <h1>{{ $route.params.name }}</h1>
</template>

<script setup lang="ts">
// 플러그인을 사용해 동적으로 작동 가능 
definePageMeta({
  middleware:[
    'jaewon'
  ]
})
</script>