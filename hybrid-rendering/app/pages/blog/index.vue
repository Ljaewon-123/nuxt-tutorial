<template>
  <div>
    <h1>
      // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
      '/blog': { isr: 3600 },
    </h1>
    <h2>
      // Blog post page generated on demand once until next deployment, cached on CDN
      '/blog/**': { isr: true },
    </h2>
  </div>
</template>