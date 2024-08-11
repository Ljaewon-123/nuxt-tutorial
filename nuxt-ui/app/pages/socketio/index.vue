<template>
  <div>
    <p>Status: {{ isConnected ? "connected" : "disconnected" }}</p>
    <p>Transport: {{ transport }}</p>
    <button @click="test">emit</button>
  </div>
</template>


<script setup lang="ts">
import { io } from "socket.io-client";

const socket = io();

const isConnected = ref(false);
const transport = ref("N/A");

if (socket.connected) {
  onConnect();
}

function onConnect() {
  isConnected.value = true;
  transport.value = socket.io.engine.transport.name;

  socket.io.engine.on("upgrade", (rawTransport: any) => {
    transport.value = rawTransport.name;
  });
}

function onDisconnect() {
  isConnected.value = false;
  transport.value = "N/A";
}

socket.on("connect", onConnect);
socket.on("disconnect", onDisconnect);

const test = () => {
  console.log('?')
  socket.emit('test', 'ahehfa')
}

onBeforeUnmount(() => {
  console.log('disconnect?')
  socket.off("connect", onConnect);
  socket.off("disconnect", onDisconnect);
});

</script>

