<template>
  <div>
    <h1>
      Hello from the main Page!
    </h1>

    <!-- 정적파일 public -->
    <img src="/images/Logo_96.png">

    <!-- 코드 외부에서 생성  -->
    <img src="/assets/images/Logo_96.png">
  </div>
</template>

<script setup lang="ts">
import '~/assets/styles/style.css' // 모든 파일에 전역 


definePageMeta({
  keepalive: {
    include: ['todo']
  }
})


useSeoMeta({
  title: 'Main Page',
  description: 'This is the main page',
  ogTitle: 'Main page',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Main Page',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})



useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<style scoped>
/* 해당 페이지에만 적용  */
@import '~/assets/styles/style.css';
.page-enter-active,
.page-leave-active{
  transition: all 0.4s;
}
.page-enter-from,
.pate-leave-to{
  opacity: 0;
  fill:blur(1rem);
}
</style>