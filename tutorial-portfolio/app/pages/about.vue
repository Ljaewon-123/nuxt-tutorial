<template>
  <div>
    This page is about me
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   layout: false
// })

const enableCustomLayout = () => {
  setPageLayout('another')
}
</script>