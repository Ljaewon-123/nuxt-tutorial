<template>
  <div>
    <v-text-field v-model="getInput" placeholder="hello?"></v-text-field>
    <v-btn @click="execute">get</v-btn>

    {{ data }}

    <br>
    {{ getError }}

    <br>
    <v-text-field v-model="postInput" placeholder="post?"></v-text-field>
    <v-btn @click="postExecute">post</v-btn>

    {{ postData }}

    <br>

    <v-btn @click="open">open token</v-btn>
    <v-btn @click="throwExcute">throw Token</v-btn>
    <br>
    <p>data {{ throwData }}</p>
    <p>error {{ throwError }}</p>
  </div>
</template>

<script setup lang="ts">
const visible = ref(false)
const getInput = ref('init valuej')
const postInput = ref('')

const { data, execute, error: getError, refresh } = await useCustomFetch('/api/token',{
  method:'get',
  query:{
    email: getInput
  },
  watch: false,
  immediate: false,
})

//  onResponseError 한번더 사용하면 오버라이드 
const { data: postData, execute: postExecute } = await useLazyCustomFetch('/api/token',{
  method: 'post',
  body:{
    email: postInput
  },
  watch: false,
  immediate: false,
})

const { data: throwData, error: throwError, execute: throwExcute } = await useLazyCustomFetch('/api/token/throw',{
  method: 'post',
  watch: false,
  immediate: false,
})

const open = async() => {
  await $fetch('/api/token/cookie-open',{
    method:'post'
  })
}

</script>