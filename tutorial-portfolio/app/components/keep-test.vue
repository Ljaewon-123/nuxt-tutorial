<template>
  <div>
    ??
    <input type="text" v-model="input" />
    {{ input }}
  </div>
</template>

<script setup lang="ts">
const input = defineModel({ default: '' })
</script>