<template>
<div>
  <strong>
    {{ data }}
  </strong>
  <br><br>
  <p>
    {{ status }}
  </p>
  <br>
  <button @click="test">chage</button>
</div>
</template>

<script setup lang="ts">
const id = ref(1)
const {data, refresh, status, error} = await useFetch(
  () => `products/1`,
  {
    baseURL: 'https://fakestoreapi.com',
    lazy: true,
    default: () => 'nodata',
    transform: (data:any) => {
      return {
        ...data,
        title: 'mobile',
      }
    },
    // deep: true, // true여야 바로 바뀜 default 는 false
    // watch: [id] // watch 활성화가 기본값 
    // pick: ['title'] as any   // 특정키만 남김
    // immediate: false
    // server: false
  }
)
console.log(data.value)

const test = () => {
  // data.value.rating.rate = 'any'
  data.value = { name: 'Mobile' }
}

</script>

<style scoped>
</style>

<!-- 기본적으로 초기 로드시 가져오기는 nuxt서버에서 실행됨 -->
<!-- server:false 옵션으로 클라이언트로 바꿀수있음  -->