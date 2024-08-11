<template>
<div>
  <div>
    <input v-model="message" type="text" name="" id="">
  </div>
  <UDashboardSearchButton @click="execute"></UDashboardSearchButton>
  <p>
    {{ data }}
  </p>
</div>
</template>

<script setup lang="ts">

const message = ref('Tell me a short story about a happy Llama.')

const {data, execute} = await useFetch('/api/langchain/signal',{
  method:'post',
  server:false,
  lazy:true,
  immediate:false,
  body: {
    message: message
  },
  watch:false
})


</script>