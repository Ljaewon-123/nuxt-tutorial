<template>
  <div>
    id : {{ route.params }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route)
</script>