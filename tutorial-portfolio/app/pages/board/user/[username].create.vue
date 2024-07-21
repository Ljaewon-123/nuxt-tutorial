<template>
  <div>
    형제 라우터 
    {{ route.params }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>