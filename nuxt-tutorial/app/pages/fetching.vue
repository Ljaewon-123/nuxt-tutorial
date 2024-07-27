<template>
<div>
  <!-- {{ todo }} -->
</div>
</template>

<script setup lang="ts">
// 클라이언트 단에서 작동  이건 찍힘 
//  서버단과 클라측 2번 요청하는거라 비효율적임 비추 
// const todo = await $fetch('https://jsonplaceholder.typicode.com/posts/1')

// useFetch
// 서버측에서만 데이터를 가져오고 이걸 ref로 전달
// 브라우저 네트워크에 안찍힘 

// useAsyncData
// 강사는 데이터 동기화를 위할때만 추천함 
// Promise.all 같이 여러개를 같이 가져올때만 사용을 추천함
const {data} = await useAsyncData(
  async () => {
    const [pro, dev, help] = await Promise.all([
      $fetch('someapi1/pro'),
      $fetch('someapi2/dev'),
      $fetch('someapi3/help'),
    ])
    return { pro, dev, help }
  }
)

data.value?.pro
data.value?.dev
data.value?.help

</script>