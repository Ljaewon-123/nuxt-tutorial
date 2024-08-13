<template>
  <div>d여기는 token
    {{ route.params }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>