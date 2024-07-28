<template>
  <div>
    <LazyWelcome v-if="show" />
    <button @click="show = !show">show btn</button>


    <h1>Counter: {{ counter }}</h1>
    <button @click="counter++">invrement</button>

    <Head>
      <Title>
        about page from component
      </Title>
    </Head>
  </div>
</template>

<script setup lang="ts">

const show = ref(false)
const counter = ref(1)

</script>