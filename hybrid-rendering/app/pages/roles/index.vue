<template>
  <div> <!-- 동적으로 처리해도 되는데 거이 안그러니까 일단 안그러겠음 -->
    <!-- <NuxtLink>customer</NuxtLink>
    <NuxtLink>admin</NuxtLink>
    <NuxtLink>role 3</NuxtLink> -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // validate(route) {
    
  // },
  middleware: ['customer', 'admin']
})

const route = useRoute()
console.log(route, 'asdf')
</script>