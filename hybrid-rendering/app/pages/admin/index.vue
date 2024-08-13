<template>
  <div>
    <h1>
      '/admin/**': { ssr: false },
      // Add cors headers on API routes
    </h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  redirect: { name: 'docs' }
})
</script>