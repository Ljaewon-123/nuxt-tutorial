<template>
  <div>
    <div v-html="content"></div>
    <v-card>
      나는 내가 카드라서 dtd
      <v-btn @click="count++">click</v-btn>
    </v-card>
    {{ count }}
  </div>
</template>

<script setup lang="ts">

const content = "<h1> what do you want?</h1>"


const count = ref(0)




</script>