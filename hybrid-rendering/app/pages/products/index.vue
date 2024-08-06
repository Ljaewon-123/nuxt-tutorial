<template>
  <div>
    <h1>
      // Products page generated on demand, revalidates in background, cached until API response changes
      '/products': { swr: true },
    </h1>
    <h2>
      // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
      '/products/**': { swr: 3600 },
    </h2>
  </div>
</template>