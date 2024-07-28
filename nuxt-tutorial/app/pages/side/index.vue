<template>
  <div v-if="userName">
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const userName = ref()
if(import.meta.client){
  userName.value = prompt('what is your?')
}

const {data} = await useFetch('/users/rec-user',{
  server: false,
  method: 'post',
  body: {
    name: userName.value
  }
})

</script>