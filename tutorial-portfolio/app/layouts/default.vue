<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">main</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" >about</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts" >posts</NuxtLink>
        </li>
      </ul>

      <br>
      <br>

      <NuxtLink :to="`/board/${coin}` ">go board coin {{ coin }}</NuxtLink>
      <br>
      <NuxtLink :to="`/board/user/${'jaewon'}/${'naver'}` ">go user info</NuxtLink>
      <br>
      <NuxtLink :to="`/board/user/:username` ">go user index</NuxtLink>
      <br>
      <NuxtLink :to="'/board/user/:username.create'">go create?</NuxtLink>
      <br>
      <NuxtLink :to="'/board/user/user-form'">user-from-redirect</NuxtLink>
      <br>
      <NuxtLink :to="'/board/user'">user index</NuxtLink>
      <br>
      <NuxtLink :to="'/board/user/keep-alive'">keep-alive test</NuxtLink>
    </nav>

    <br>
    <br>
    <br>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const coin = ref(3)
</script>