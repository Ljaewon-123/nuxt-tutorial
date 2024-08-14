<template>
  <div>
    <h1>Hybrid rendering in Nuxt</h1>
    <div>
      <NuxtLink to="/">Home</NuxtLink>
      <br>
      <!-- <NuxtLink to="/admin">admin</NuxtLink> -->
      <br>
      <NuxtLink to="/admin/spa">SPA</NuxtLink>
      <br>
      <NuxtLink to="/blog">blog</NuxtLink>
      <br>
      <NuxtLink to="/products">products</NuxtLink>
      <br>
      <NuxtLink to="/old-page">oldpage</NuxtLink>
      <br>
      <NuxtLink to="/i18n">i18n</NuxtLink>
      <br>
      <NuxtLink to="/login">Login</NuxtLink>
      <br>
      <NuxtLink to="/example">Wrong fetch example</NuxtLink>
      <br>
      <NuxtLink to="/island">Island</NuxtLink>
      <br>
      <NuxtLink to="/token">token</NuxtLink>
      <br><br>
      <v-btn @click="logout">log out</v-btn>
    </div>
    <v-main>
      <slot></slot>
    </v-main>
  </div>
</template>

<script setup lang="ts">

const logout = async() => {

  const a = await $fetch('/api/token/delete-all-cookie',{method:'POST'})
  console.log(a ,'logout@@@!@#!@#')
  navigateTo('/login')
}

</script>