<template>
  <div  >
    <h1>CUSTOM Layout</h1>
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
</script>