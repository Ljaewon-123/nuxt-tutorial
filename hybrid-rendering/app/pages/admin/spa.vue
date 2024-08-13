<template>
  <div>
    <h1>
      SPA 방식
      router 인스턴스 재사용같이 티나는 기능은 차이가 안나느데
    </h1>
    <div>
      <p>
        <NuxtLink to="/admin/spa" >SPA</NuxtLink>
      </p>
      <NuxtLink to="/admin/spa/render" >Render</NuxtLink>
    </div>
    <NuxtPage/>
  </div>
</template>
