<template>
  <v-card
    class="py-8 px-6 text-center mx-auto ma-4"
    elevation="12"
    max-width="400"
    width="100%"
  >
    <h3 class="text-h6 mb-4">Verify Your Account</h3>

    <div class="text-body-2">
      We sent a verification code to john..@gmail.com <br>

      Please check your email and paste the code below.
    </div>

    <v-sheet color="surface">
      <v-otp-input
        v-model="otp"
        type="password"
        variant="solo"
      ></v-otp-input>
    </v-sheet>

    <div class="ml-2">
      <v-btn
        @click="verification"
        class="my-4"
        color="purple"
        height="40"
        text="Verify"
        variant="flat"
        width="70%"
        :loading="status == 'pending'"
      ></v-btn>
    </div>

    <div class="text-caption">
      Didn't receive the code? <a href="#" @click.prevent="resendHandler">Resend</a>
    </div>
    {{ status }}
    {{error}}
  </v-card>
</template>

<script setup lang="ts">
const otp = ref('')
const { data ,error, execute, status } = await useFetch('/api/login/verified-code',{
  method: 'POST',
  body: { code: otp },
  immediate:false,
  watch: false,
})

const { 
  data: resendData ,
  error: resendError, 
  execute: resned, 
  status: resnedStatus 
} = await useFetch('/api/login/resend-email',{
  method: 'POST',
  immediate:false,
  watch: false,
})

const verification = async() => {
  await execute()
  otp.value = ''

  if(!error.value){
    navigateTo('/')
  }
  if(error.value){
    // 얼럿만??
    throw showError({
      statusCode: 401,
      statusMessage: 'try again'
    })
  }
}

const resendHandler = async() => {
  await resned()
  otp.value = ''

  if(resendError.value){
    throw showError({
      statusCode: 500,
      statusMessage: 'mail fail try again'
    })
  }
}

</script>