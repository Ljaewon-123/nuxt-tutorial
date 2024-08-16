<template>
  <div>
    <Head>
      <Title>
        {{ counter }}
      </Title>
    </Head>
    <button @click="counter++">Increment</button>
  </div>
</template>

<script setup lang="ts">
// 플러그인을 사용해 동적으로 작동 가능 
definePageMeta({
  middleware:[
    'test'
  ]
})

const counter = ref(1)
</script>