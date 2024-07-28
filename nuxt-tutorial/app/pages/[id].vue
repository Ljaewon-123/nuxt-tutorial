<template>
<div>
  <h1>everything is fine</h1>
  <h3>{{ route.params.id }}</h3>
  <h4>
    is ERROR ??
  </h4>
</div>
</template>

<script setup lang="ts">
const route = useRoute()
definePageMeta({
  validate(r) {
    return /^\d+$/.test(r.params.id as any)
  },
  layout: 'custom'
})
// definePageMeta({
//   middleware:[
//     (to) => {
//       if(to.params.id == '1') return navigateTo('/')
//       if(to.params.id == '2') return abortNavigation() // 404
//       if(to.params.id == '3') return abortNavigation('ID should not be 3') // 500 ID should not be 3
//     }
//   ]
// })




</script>