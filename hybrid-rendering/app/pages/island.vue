<template>
  <div>
    <textarea id="message" v-model="message" cols="30" rows="10"></textarea>
    <br>
    <!-- <Hello></Hello> -->
    <!-- <NuxtIsland name="hello"></NuxtIsland> -->
    <!-- <NuxtIsland name="hello-not"></NuxtIsland> -->
    <!-- <NuxtIsland name="Hello"></NuxtIsland> -->
    <!-- <NuxtIsland name="HelloNot" ></NuxtIsland> -->
    <!-- .server.vue 파일만 된다  -->
    <NuxtIsland name="Hello" :props="{message}" v-model="count" ></NuxtIsland>

    <v-btn @click="count++">count++</v-btn>

    <div>
      props : {{ message }} , v-model: {{ count }}
    </div>
  </div>
</template>

<script setup lang="ts">
const message = ref(``)
const count = ref(0)

// v-model은 반응 안함 아직 거기까지는 아닌가보네;; 아

</script>

<!-- 원래 버전 "nuxt": "^3.12.4", -->
<!-- 아일랜드 가능 버전 "nuxt": "3.12.1", -->
<!-- 데브툴에 나왔다 뿐이지 같은 에러로 안됨  -->
<!-- 버전이랑 관련 없는거 같음 같은 에러 나옴 ;;; -->
<!-- 파스칼로 써야하는듯 ;;...... -->