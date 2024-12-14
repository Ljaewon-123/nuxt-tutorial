<template>
<div>
  <!-- <button  @click="refresh">backoff test</button> -->
  <UButton @click="refresh" target="_blank" icon="i-simple-icons-x" color="gray" variant="ghost" >
    backoff test
  </UButton>

  <UButton @click="asyncRefrsh" target="_blank" icon="i-simple-icons-x" color="gray" variant="ghost" >
    backoff async
  </UButton>

  <br>

  <UButton @click="refresh" target="_blank" icon="i-simple-icons-x" color="gray" variant="ghost" >
    Async 
  </UButton>

  <div>
    <h1>Users</h1>
    {{ data }}
  </div>

</div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()
const userRepo = repository($api)
const { data } = await useAsyncData(() => userRepo.get() )


const retryBackoff = (min = 1000, deadLine = 3) => {
  let failCount = 0
  let delay = min
      
  return {
    backoff: () => {
      failCount++
      
      if(failCount > deadLine) {
        console.log('dead?')
        throw Error('Server retry error')
      }

      delay = min * failCount

      console.log(`Retry: ${failCount} in ${delay}ms`);

      return delay
    },
    // 이거 필요없는거 같은데
    reset: () => {
      failCount = 0
      delay = min
    }
  }
}

// promise를해줘야 초기화가 쉽다.
const { backoff, reset } = retryBackoff()
const { refresh } = await useFetch('/api/backoff',{
  method:'post',
  server: false,
  immediate: false,
  onResponseError:async() => {
    console.log('itis useFetch interceptor')
    try{
      await new Promise(res => {
        setTimeout( () => {
          res( refresh() )
        }, backoff() )
      })
    }
    catch(e:any){
      console.error(e)
      reset()
    }
    reset()
  }
})

const { refresh: asyncRefrsh, clear: asyncClear } = await useAsyncData('backoff', () => $fetch('/api/backoff',{
  method:'post',
  server: false,
  immediate: false,
  onResponseError:async() => {
    console.log('itis AsyncData interceptor')
    try{
      await new Promise(res => {
        setTimeout( () => {
          res( asyncRefrsh() )
        }, backoff() )
      })
    }
    catch(e:any){
      console.error(e)
      asyncClear
      reset()
    }
    reset()
  }
}))


</script>