import { defineStore } from "pinia"
import { ref } from "vue"

export const userTestStore = defineStore('test', () => {

  const backFullPath = ref()

  function getInfo(data:any){
    backFullPath.value = data
  }

  return {
    backFullPath,
    getInfo
  }
})
