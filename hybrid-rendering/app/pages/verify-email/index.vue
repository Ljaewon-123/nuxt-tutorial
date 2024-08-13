<template>
  <div>
    여기는 index
    {{ route.query }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
const route = useRoute()
</script>