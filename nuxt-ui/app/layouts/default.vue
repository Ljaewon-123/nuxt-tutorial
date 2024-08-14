<template>
  <UHeader :links="links">
    <template #logo>
      <!-- <Logo class="w-auto h-6" /> -->
    </template>

    <template #right>
      <UColorModeButton />

      <UButton icon="i-simple-icons-github" to="https://github.com/nuxt/nuxt" target="_blank" color="gray" variant="ghost" />
    </template>
  </UHeader>

  <UMain>
    <slot></slot>
  </UMain>

  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2016-{{ new Date().getFullYear() }} Nuxt - <NuxtLink class="hover:underline" to="https://github.com/nuxt/nuxt/blob/main/LICENSE" target="_blank">
          MIT License
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UButton to="https://x.com/nuxt_js" target="_blank" icon="i-simple-icons-x" color="gray" variant="ghost" />
      <UButton to="https://discord.com/invite/ps2h6QT" target="_blank" icon="i-simple-icons-discord" color="gray" variant="ghost" />
      <UButton to="https://github.com/nuxt/nuxt" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>
  </UFooter>
  <UNotifications />
</template>

<script setup lang="ts">
// ....다크모드를 한방에 하게 해주네;; 
const links = [{
  label: 'Playground',
  icon: 'i-simple-icons-stackblitz',
  to: '/playground'
}, {
  label: 'Layout',
  icon: 'i-heroicons-map',
  to: '/layout'
}, {
  label: 'Auth Form',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/form'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
},
{
  label: 'Dashboard',
  icon: 'prime:android',
  to: '/dashboard',
},
{
  label: 'Socket-io',
  icon: 'prime:android',
  to: '/socketio',
},
{
  label: 'Grid Stack',
  icon: 'prime:android',
  to: '/gridstack',
},
]
</script>


