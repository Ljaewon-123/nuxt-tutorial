<template>
  <div>
    <h2>
      rendering
    </h2>
    <div>
      {{ route.params.render }}
    </div>
    <v-btn @click="routerPush">push params</v-btn>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

console.log('start render again')

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const routerPush = () => {
  navigateTo(`/admin/spa/${getRandomNumber()}`)
}



</script>