<template>
  <v-empty-state
    icon="mdi-magnify"
    :headline="String(error.statusCode)"
    :title="error.statusMessage"
    action-text="go awat anna"
    @click:action="handleError"
  ></v-empty-state>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
  error:{
    type: Object as () => NuxtError,
    required: true
  }
})

const handleError = () => clearError({ redirect: '/login' })
</script>