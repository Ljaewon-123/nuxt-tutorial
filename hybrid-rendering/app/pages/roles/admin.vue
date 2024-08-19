<template>
  <div>
    <nav class="d-flex ga-3">
      <NuxtLink to="/roles/customer">customer</NuxtLink>
      <NuxtLink to="/roles/admin">admin</NuxtLink>
      <NuxtLink to="/roles">roles index</NuxtLink>
    </nav>
    <h1>admin</h1>
    <p>
      어드어드어슷어슷 어슷썰기
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['admin']
})
</script>