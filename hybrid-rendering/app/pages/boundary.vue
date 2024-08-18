<template>
  <!-- throw 에 반응함 -->
  <!-- client-side 에러만 잡고 그외 에러는 500으로 할수있음  -->
  <!-- 컴포저블 error로는 반응안함  -->
  
  <!-- NuxtErrorBoundary: fetch에대한 에러 보다는 컴포넌트 자체에대한 에러 사용이 더좋을거같은데.. 지금은  -->
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
