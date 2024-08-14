<template>
<div>
  <v-form ref="form" @submit.prevent="submitLogin" v-model="valid">
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
      {{ data }}
      {{ callCount }}

      <br>
      <!-- {{ atToken }} -->
    </v-container>
  </v-form>

  <v-card>
    <v-btn @click="deleteCookie" class="mt-2" block>Delete Cookie</v-btn>
  </v-card>

</div>

<v-dialog v-model="dialog" persistent >
  <lazy-verify-otp></lazy-verify-otp>
</v-dialog>

</template>

<script setup lang="ts">
const valid = ref(false)
const email = ref('test@test.com')
const password = ref('1234')
const form = ref()
const dialog = ref(false)
// const refBody = ref({
//   email: '',
//   password: ''
// })
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

const callCount = ref(0)

//  아예 body가 변하지 않거나 하나의 변화마다 데이터를 패칭하거나 
// const { data, refresh } = await useFetch('/api/login', {
//   method:'POST',
//   body:{
//     email: email.value,
//     password: password.value
//   },
//   immediate: false,
//   server:false
// })
// async function submitLogin(){
//   await refresh()
  
// }

// 흔히 우리가 원하던 방식으로 동작한다... 이것이 
// 캐싱기능 때문이라면 useFetch에서 key를 사용하면?? XX 안됨
/** 
 * // immediate: false,
    // server: false,
    옵션이 작동해서 여전히 페이지에 처음 접근리 login을 처리핸다 이건 useAsyncData이녀석만 이러는데
    관련 자료를 찾을수가없다 왜재??? 
 * **/
// const { data, execute: submitLogin } = await useAsyncData('login',() => $fetch('/api/login' ,{
//   method:'POST',
//   body:{
//     email: email.value,
//     password: password.value
//   },
//   immediate: false,
//   server: false,
//   lazy:true
// }))

// 제일 정석적인 부분으로 동작한다 
// const data= ref()
// const submitLogin = async () => {
//   try {
//     data.value = await $fetch('/api/login', {
//       method: 'POST',
//       body: {
//         email: email.value,
//         password: password.value,
//       },
//     })
//     callCount.value++
//   } catch (error) {
//   }
// }

//       body: {
//         email: email.value,
//         password: password.value,
//       },

// 이거 제대로 동작하는데??? 아니... 뭐를 다르게 했나 왜 옵션마다 다른거 같지 
/**
 * 여기에서 
 * body:{
 *  email: email.value
 *  password: password.value 는 안됨 ref타입 자체를 그대로 넘겨줘야하고
 * }
 * 에러시에도 여러번 패칭되는건 없는거 같음 
 * 
 *  **/
const deleteCookie = () => {
  // token.value = null
  
  // 아..... 옵션때문에 여기에서 접근안됨;;;; ㅋㅋㅋㅋㅋ

  showError({
    statusCode: 403,
    statusMessage: 'delete Cookie test'
  })
}

const { data ,error, execute } = await useFetch('/api/login',{
  method: 'POST',
  body: body,
  immediate:false,
  watch: false,
  onResponse: () => callCount.value++
})

async function submitLogin(){
  
  const { valid } = await form.value.validate()

  // 성공시 얼럿 
  if(valid) alert('roles match')

  await execute()

  if(!error.value){
    dialog.value = true
  }

  if(error.value){
    console.log('error', error.value)
  }

}




</script>