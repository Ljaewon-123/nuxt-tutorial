<template>
  <NuxtLayout >
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// const layout = 'another'
// nuxtLayout에 :name추가하면 레이아웃 전역으로 사용

// ***************
// 처음만 서버를 통할 뿐이지 그 이후에는 CSR로 동작 일단은 말이다.
// ***************

</script>

<style>
/* ... */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>