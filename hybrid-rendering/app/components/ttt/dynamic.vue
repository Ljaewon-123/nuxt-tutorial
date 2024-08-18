<template>
  <keep-alive>
    <suspense>
      <component 
        :is="boundary" 
      >
      </component>

      <template #fallback>
        <v-card
          width="150"
          height="150"
        >
        loading
        </v-card>
      </template>
    </suspense>
  </keep-alive>
  <v-btn @click="clickable = !clickable">change</v-btn>
</template>

<script setup lang="ts">

// 처음에 a.vue만 다운로드되고 b.vue, c.vue는 실행시켜야지만이 나온다 
// nuxt의 lazy기능처럼 됨 good
const props = defineProps({
  name: {
    type:String,
    default: ''
  },
})

const A = defineAsyncComponent(() => import('~/components/ttt/a.vue'));
const B = defineAsyncComponent(() => import('~/components/ttt/b.vue'));
const C = defineAsyncComponent(() => import('~/components/ttt/c.vue'));

const boundary = computed(() => {
  switch (props.name) {
    case 'A': return A
    case 'B' : return B
    case 'C' : return C

    default: return A
  }
})

const clickable = ref(false)
// const boundary = resolveComponent(props.name) // 이거 nuxt가 아니라 vue기능이네 ;



watchEffect(() => {
  console.log(boundary)
})


</script>