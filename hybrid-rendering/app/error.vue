<template>
  <v-app>
    <v-empty-state
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

defineProps({
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
</script>