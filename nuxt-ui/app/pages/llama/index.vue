<template>
<div>
  <ConnectionClient></ConnectionClient>
  <div>
    <input v-model="message" type="text" name="" id="">
  </div>
  
  <p>
    {{ data }}
  </p>

</div>
</template>

<script setup lang="ts">
import ConnectionClient from '~/components/connection.client.vue';


const message = ref('Tell me a short story about a happy Llama.')

const {data, execute} = await useFetch('/api/socket/test2',{
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