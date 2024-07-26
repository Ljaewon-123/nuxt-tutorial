<template>
  <div>
    <LazyWelcome v-if="show" />
    <button @click="show = !show">show btn</button>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About'
})

const show = ref(false)
</script>