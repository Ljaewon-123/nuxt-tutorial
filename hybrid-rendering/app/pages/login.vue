<template>
<div>
  <v-form @submit.prevent="submitLogin" v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="password"
            :counter="10"
            label="Password"
            hide-details
            required
          ></v-text-field>
        </v-col>

      </v-row>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-container>
  </v-form>
</div>
</template>

<script setup lang="ts">
const valid = ref(false)
const email = ref('test@test.com')
const password = ref('1234')
const body = computed(() => {
  return {
    email: email.value,
    password: password.value
  }
})
const emailRules=  [
  ( value: string) => {
    if (value) return true

    return 'E-mail is requred.'
  },
  (  value: string) => {
    if (/.+@.+\..+/.test(value)) return true

    return 'E-mail must be valid.'
  },
]

//  아예 body가 변하지 않거나 하나의 변화마다 데이터를 패칭하거나 
// const { data, execute: submitLogin } = await useFetch('/api/login', {
//   method:'POST',
//   body:{
//     email,
//     password
//   },
//   immediate: false,
// })

// 흔히 우리가 원하던 방식으로 동작한다... 이것이 
// 캐싱기능 때문이라면 useFetch에서 key를 사용하면?? XX 안됨
const { data, execute: submitLogin } = await useAsyncData('login',() => $fetch('/api/login' ,{
  method:'POST',
  body:{
    email: email.value,
    password: password.value
  },
  immediate: false,
  watch:[email, password]
}))

// 소용없다... 생각해보면 없으면 직접만드는데 다를리가 ;;
// const { data, execute: submitLogin } = await useFetch('/api/login', {
//   method:'POST',
//   key: 'originkey',
//   body:{
//     email:email.value,
//     password: password.value
//   },
//   immediate: false,
//   watch:[email, password]
// })

</script>