<template>
  <div  >
    <header >
      <div>
        <div>
          <NuxtLink to="/"  >Jaewon Lee</NuxtLink>
        </div>
        
        <HeaderMenu/>
      </div>
    </header>

    <main >
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
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