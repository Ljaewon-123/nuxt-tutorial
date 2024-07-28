<template>
  <div  >


    <main >
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - Movies',
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