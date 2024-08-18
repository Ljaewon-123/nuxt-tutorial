<template>
  <div>
    what error? js? html?
    data:{{ data }}
    error: {{ error }}
    <!-- <v-btn @click="catchError">catch error</v-btn> -->
  </div>
</template>

<script setup lang="ts">

// 컴포저블 error로는 반응안함 
const {data, error} = useFetch('/api/test')

const catchError = async() => {
  await Promise.reject('123')
}

</script>