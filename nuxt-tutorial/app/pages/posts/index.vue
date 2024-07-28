<template>
<div>
  <h1>
    {{ result }}
  </h1>
  <button @click="getposts">get</button>
  <button @click="addPost">post</button>
  <button @click="editPost">put</button>
  <button @click="deletePost">delete</button>
</div>
</template>
<script setup lang="ts">
const result = ref()
const getposts = async() => {
  const {data} = await useFetch('/api/posts')
  result.value = data.value
}
const addPost = async() => {

  const {data} = await useFetch('/api/posts',
    {
      method: 'post',
      body: {
        newPost:{
          id: 3,
          title: 'This is new post'
        }
      }
    }
  )
  result.value = data.value
}
const editPost = async() => {

  const {data} = await useFetch('/api/posts',
    {
      method: 'put',
      body: {
        title: 'hole new persion now'
      }
    }
  )
  result.value = data.value
}
const deletePost = async() => {

  const {data} = await useFetch('/api/posts',
    {
      method: 'delete',
      body: {
        title: 'delete'
      }
    }
  )
  result.value = data.value
}
</script>