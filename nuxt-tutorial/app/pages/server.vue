<template>
<div>
  <h1>Server File</h1>
  <h1>{{ data }}</h1>
</div>
</template>

<script setup lang="ts">
const {data} = await useFetch('/api/hello')
</script>