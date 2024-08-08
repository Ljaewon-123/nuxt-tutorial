<template>
  <div>
    <div v-html="content"></div>
    <v-card>
      나는 내가 카드라서 dtd
      <v-btn @click="count++">click</v-btn>
    </v-card>
    {{ count }}
    <br>
    {{ props.message }}
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  message: String
})

const count = defineModel({ default: 0 })

const content = "<h1> what do you want?</h1>"




</script>