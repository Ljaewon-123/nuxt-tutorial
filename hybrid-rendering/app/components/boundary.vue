<template>
  <div>
    what error? js? html?
    <v-btn @click="catchError">catch error</v-btn>
  </div>
</template>

<script setup lang="ts">


const catchError = async() => {
  await Promise.reject('123')
}

</script>