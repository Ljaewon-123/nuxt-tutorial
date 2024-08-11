<script setup>
import { io, Manager } from "socket.io-client";

const socket = io();

const isConnected = ref(false);
const transport = ref("N/A");

if (socket.connected) {
  onConnect();
}

function onConnect() {
  isConnected.value = true;
  transport.value = socket.io.engine.transport.name;

  socket.io.engine.on("upgrade", (rawTransport) => {
    transport.value = rawTransport.name;
  });
}

function onDisconnect() {
  isConnected.value = false;
  transport.value = "N/A";
}

socket.on("connect", onConnect);
socket.on("disconnect", onDisconnect);

onBeforeUnmount(() => {
  socket.off("connect", onConnect);
  socket.off("disconnect", onDisconnect);
});

const test = () => {
  console.log('????')
  socket.emit("test", "world");

}

</script>

<template>
<div>
  <p>Status: {{ isConnected ? "connected" : "disconnected" }}</p>
  <p>Transport: {{ transport }}</p>
  <button @click="test" >click</button>
</div>
</template>
