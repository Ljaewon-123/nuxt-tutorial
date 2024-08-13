<template>
<div>
  <NuxtClientFallback>
    <ClientFallback />
    <template #fallback>
      <p>some fallback content</p>
    </template>
  </NuxtClientFallback>
</div>
</template>