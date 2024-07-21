<template>
  동적 라우팅 
  <br>
  <span>
    .........{{ route.params.id }}

    <br>
    {{ route.params }}
  </span>
  <span>
    
  </span>
</template>

<script setup lang="ts">


const route = useRoute()
console.log(route)

</script>