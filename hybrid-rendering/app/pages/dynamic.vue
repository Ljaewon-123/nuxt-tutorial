<template>
  <div>
    <!-- <TttDynamic :name="name"/> -->
    <TttDynamic :name="name"/>
    <!-- <Dynamic/> -->
    <v-btn @click="name='A'">A</v-btn>
    <v-btn @click="name='B'">B</v-btn>
    <v-btn @click="name='C'">C</v-btn>
    <v-btn @click="name=''">init</v-btn>
  </div>
</template>

<script setup lang="ts">

const name = ref('A')





</script>