<template>
  <div>
    <span>keep-alive meta</span>
    <keep-test v-model="input"></keep-test>
  </div>
</template>

<script setup lang="ts">
const input = ref('')
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>