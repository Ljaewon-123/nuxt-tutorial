<template>
  <article class="prose dark:prose-invert">
    <ContentDoc ></ContentDoc>
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route.params.slug)
</script>