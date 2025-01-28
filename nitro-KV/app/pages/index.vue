<template>
  <pre>
    {{ user }}
    <button @click="number = n" v-for="n in 5">
      Fetch user {{ n }}
    </button>
    <h2>Recent users</h2>
    <ul>
      <li v-for="user in recentUsers">
        {{ user.name }} - {{ user.id }}
      </li>
    </ul>
  </pre>
</template>

<script setup lang="ts">
const number = ref(1)
const { data: user } = await useFetch(() => `/api/user/${number.value}`)
const { data: recentUsers } = await useFetch('/api/info/recent', {
  watch: [user]
})
</script>