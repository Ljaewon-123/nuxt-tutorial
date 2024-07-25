<template>
  <div>
    <h2>board id</h2>

    <h3>
      {{ route.params }}
    </h3>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>