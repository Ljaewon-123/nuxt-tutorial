<script setup lang="ts">
const { t, setLocale } = useI18n()

console.log(
  t('welcome')
)

</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <br>
      <button @click="setLocale('fr')">fr</button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>