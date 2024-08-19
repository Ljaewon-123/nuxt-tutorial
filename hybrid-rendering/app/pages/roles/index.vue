<template>
  <div class="d-flex ga-3"> <!-- 동적으로 처리해도 되는데 거이 안그러니까 일단 안그러겠음 -->
    <NuxtLink to="/roles/customer">customer</NuxtLink>
    <NuxtLink to="/roles/admin">admin</NuxtLink>
    <NuxtLink to="/roles">roles index</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // validate(route) {
    
  // },
  // middleware: ['customer', 'admin']
})

const route = useRoute()
console.log(route, 'asdf')
</script>