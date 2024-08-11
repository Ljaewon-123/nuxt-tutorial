<template>
  <div>
    <h1>Socket.io Client</h1>
    <button @click="sendArray">Send Array</button>
    <div v-if="messages.length">
      <ul>
        <li v-for="(message, index) in messages" :key="index">
          {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import io from 'socket.io-client';

// Server URL (modify as needed)
const serverUrl = 'http://localhost:3000';

const socket = io(serverUrl);

const messages = ref([]);

const sendArray = async () => {
  await fetch('/api/socket/test2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(['Message 1', 'Message 2', 'Message 3']),
  });
};

// Handle incoming messages
const handleIncomingMessage = (message) => {
  messages.value.push(message);
};

onMounted(() => {
  socket.on('replay', handleIncomingMessage);
});

onUnmounted(() => {
  socket.off('replay', handleIncomingMessage);
});

</script>
