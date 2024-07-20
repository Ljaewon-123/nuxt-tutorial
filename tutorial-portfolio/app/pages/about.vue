<template>
  <div>
    This page is about me
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   layout: false
// })
// deine page meta 주석이면 default로 레이아웃 사용
//  layout : false면 랜더링 된 이후에 동적으로 레이아웃 지정 
// 처음에 아무것도 없음

const enableCustomLayout = () => {
  setPageLayout('another')
}
</script>