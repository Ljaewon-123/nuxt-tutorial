<template>
  <div v-for="todo,index in todos" :key="index">
    {{ todo.todo }}
    <span>
      <button @click="deleteTodo(index)">Delete</button>
    </span>
  </div>
</template>

<script setup lang="ts">
const todos = defineModel<{todo:string}[]>({ default: [] })
const deleteTodo = (index: number) => {
  todos.value.splice(index, 1)
}
</script>