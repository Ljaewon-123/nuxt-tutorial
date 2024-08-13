<template>
  <!-- throw 에 반응함 -->
  <!-- client-side 에러만 잡고 그외 에러는 500으로 할수있음  -->
  <NuxtErrorBoundary @error="logSomeError">
    <Boundary></Boundary>
    <template #error="{ error }">
      <p>An error occurred: {{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>


<script setup lang="ts">
const logSomeError = (evt:any) => {
  console.log(evt ,'????????')
}
</script>
