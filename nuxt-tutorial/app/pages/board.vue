<template>
  <div>
    is here?
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
// 서버에서 하기 때문에 root노드 기준으로 잡힘 
// /board/index -> /board/[id]로 이동해도 똑같이 전역두번 
// definePageMeta({
//   middleware: [
//     'middleware-example'
//     // (to, from) => {}
//   ]
// })
</script>