<template>
  <UDashboardModal
    v-model="open"
    title="Delete account"
    description="Are you sure you want to delete your account?"
    icon="i-heroicons-exclamation-circle"
    :ui="{
      icon: { base: 'text-red-500 dark:text-red-400' } as any,
      footer: { base: 'ml-16' } as any
    }"
  >
    <template #footer>
      <UButton color="red" label="Delete" :loading="loading" @click="onDelete" />
      <UButton color="white" label="Cancel" @click="open = false" />
    </template>
  </UDashboardModal>
</template>


<script setup lang="ts">
definePageMeta({
  layout:'dashboard'
})
const open = ref(true)
const loading = ref(false)

function onDelete () {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    open.value = false
  }, 1000)
}

// This is a hack to keep the modal open
watch(open, (value) => {
  if (!value) {
    setTimeout(() => open.value = true, 1000)
  }
})
</script>
