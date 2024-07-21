<template>
  <nav class="font-mono">
    <ul class="flex space-x-4">
      <li>
        <NuxtLink to="/" class="link" >main</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about"  class="link" >about</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects"  class="link" >projects</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link{
  @apply p-1 hover:bg-gray-200
}
</style>