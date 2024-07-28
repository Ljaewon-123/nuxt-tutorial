<template>
<div>
  <NuxtLink to="/todo/do">going do</NuxtLink>
  <h1>here input</h1>
  <input type="text" v-model="input"  />
  <button @click="addTodos">push todo</button>
  <div>
    <h1>Here new items</h1>
    <TodoList v-model="todos"></TodoList>
    <!-- <div v-for="todo,index in todos" :key="index">
      {{ todo.todo }}
    </div> -->
  </div>

</div>
</template>

<script setup lang="ts">


const input = ref('')
const todos = ref<{ todo: string }[]>([])

const addTodos = () => {
  todos.value.push({ todo: input.value })
  input.value = ''
}
</script>