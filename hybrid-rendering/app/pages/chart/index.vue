<template>
  <div>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <ChartExample />
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>
    ??

    <div>
      client component 안도ㅔ네?
      <ChartExampleA />
    </div>
  </div>
</template>