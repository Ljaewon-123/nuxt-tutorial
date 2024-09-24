<script setup lang="ts">
const { t, setLocale } = useI18n()

const { locale } = useI18n()

console.log(
  t('welcome')
)
const test = () => {
  
}
</script>

<template>
  <div>
    {{ locale }}
    <div>
      <button @click="setLocale('en')">en</button>
      <br>
      <button @click="setLocale('fr')">fr</button>
      <p>{{ t('welcome') }}</p>
    </div>
  </div>
</template>