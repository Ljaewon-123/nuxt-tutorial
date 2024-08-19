<template>
  <div>
    <nav class="d-flex ga-3">
      <NuxtLink to="/roles/customer">customer</NuxtLink>
      <NuxtLink to="/roles/admin">admin</NuxtLink>
      <NuxtLink to="/roles">roles index</NuxtLink>
    </nav>
    <h1>customer</h1>
    <p>
      나는 커스토머 입니다 휴먼 불만있습니까?? 정식으로 항의하겠습니다.
    </p>
    <div>
      {{ data }}
      <v-btn @click="refresh">rere</v-btn>
    </div>
    <div>
      {{ bothData }}
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['customer']
})

const { data, execute, error: getError, refresh } = await useCustomFetch('/api/example/customer',{
  method:'post',
  body:{
    test: 'adsfeaf'
  },
  watch: false,
})

const { data: bothData } = await useCustomFetch('/api/example/both',{
  method:'post',
  body:{
    test: 'bothboth'
  },
  watch: false,
})



</script>