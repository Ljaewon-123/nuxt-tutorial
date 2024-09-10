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

// throw 혹은 Promise.reject에 반응하고 클라에서만 작동 
const catchError = async() => {
  await Promise.reject('123')
}

</script>