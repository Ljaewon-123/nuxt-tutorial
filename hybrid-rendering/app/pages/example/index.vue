<template>
<div>
  <v-form @submit.prevent="onSubmit">
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="userName"
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
  <p>
    Amount of calls: {{ callCount }}
    <br><br>
    <p>Did it Work? {{ didItWork }}</p>
  </p>
</div>
</template>

<script setup lang="ts">
const callCount = ref(0)
const userName = ref('AzureDiamod')
const password = ref('')
const body = computed(() => {
  return {
    userName: userName.value,
    password: password.value
  }
})
const didItWork = ref(false)

// didItWork이 true가 된이후로 반응형 변수가 바뀔때마다 데이터를 호출 XXX
// async function onSubmit(){
//   const { error } = await useFetch('/api/example',{
//     method: 'POST',
//     body,
//     onResponse: () => callCount.value++
//   })

//   if(!error.value){
//     didItWork.value = true
//   }
// }

// 성공시는 괜찮은데 실패할때마다 변수 변화량만큼의 추가 데이터 패칭
// 실패 => 제출취소시 이전에 가졌던 body와 같은 인스턴스를 
// 추가로 생성함
// async function onSubmit(){
//   try {
//     const data = await $fetch('/api/example',{
//       method: 'POST',
//       body,
//     })
//     callCount.value++
//     didItWork.value = true
//   } catch (error) {
//     console.error(error)
//   }

// }

const { error, refresh } = await useFetch('/api/example',{
  method: 'POST',
  body,
  immediate:false,
  watch: false,
  onResponse: () => callCount.value++
})

async function onSubmit(){
  await refresh()
  if(!error.value){
    didItWork.value = true
  }
}


// 참고 
// https://www.youtube.com/watch?v=njsGVmcWviY&list=LL&index=8
</script>