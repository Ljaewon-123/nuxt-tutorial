<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200" >Jaewon Lee</NuxtLink>
      </div>
      
      <HeaderMenu/>
    </header>

    <main class="p-2 mt-10">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
// api.github.com/users/vue-nest-chat/repos
useHead({
  titleTemplate: '%s - Jaewon Lee',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>
body {
  font-family: 'Roboto';
}
</style>