<template>
<div>
  <ConnectionClient></ConnectionClient>
  <div>
    <input v-model="message" type="text" name="" id="">
  </div>
  
  <p>
    {{ data }}
  </p>

  <button @click="snedMessage">socket io</button>

  <br> llama said <br>

  <div>
    <p>
      {{ socketData }}
    </p>
    <br>plus ++++++ <br>
    <p>
      {{ plusData }}
    </p>
  </div>
  
</div>
</template>

<script setup lang="ts">
import ConnectionClient from '~/components/connection.client.vue';
import { io } from "socket.io-client";
import { useSocketSotre } from '~/store/socket';

const socket = io();
const socketData = ref()
const plusData = ref()

const { count } = useSocketSotre()

const message = ref('Tell me a short story about a happy Llama.')

const {data, execute} = await useFetch('/api/langchain/multi',{
  method:'post',
  server:false,
  lazy:true,
  immediate:false,
  body: {
    message: message
  },
  watch:false
})

const snedMessage = async() => {
  // socket.emit('replay', 'rep')
  execute()
}

socket.on('replay', data => {
  console.log(data,'@@@@@@@@@@@@@@@@@@@')
  socketData.value = data
  plusData.value += data
})

</script>