<template>
  <div>
    <h1>Hibrid rendering in Nuxt</h1>
    <div>
      <NuxtLink to="/">Home</NuxtLink>
      <br>
      <NuxtLink to="/admin">admin</NuxtLink>
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
      <br><br>
    </div>
    <main>
      <slot></slot>
    </main>
  </div>
</template>