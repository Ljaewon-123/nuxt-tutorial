<template>
  <v-app>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">

const { locale } = useI18n()


// Nuxt에서 useHead() 사용해 우아하게 HTML lang 속성 동적 설정
watchEffect(() => {
  useHead({
    htmlAttrs: {
      lang: locale.value
    }
  })
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}

html[lang="en"] {
  font-size: 40px;
}
html[lang="ko"] {
  font-size: 18px;
}
html[lang="fr"] {
  font-size: 8px;
}
</style>