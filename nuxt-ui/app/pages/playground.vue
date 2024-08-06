<template>
  <div class="flex-1">
    <ULandingCard
      title="Portfolio"
      description="Veniam minim ipsum anim. Irure voluptate magna dolore id dolore ex quis sint sint et duis dolor enim fugiat."
      icon="i-heroicons-photo"
      color="primary"
      orientation="horizontal"
    >
      <img
        src="https://picsum.photos/640/360?grayscale"
        class="w-full rounded-md"
      />
    </ULandingCard>

    <UPage>
      <template #left>
        asdf
      </template>

      <template #right>
        <button @click="reids">cookie?</button>
      </template>

      {{ test }}
    </UPage>
  </div>
</template>

<script setup lang="ts">

  
const {data, execute} = await useFetch('/api/cookies')

const {data:test, execute:reids} = await useFetch('/api/storage/test')


</script>