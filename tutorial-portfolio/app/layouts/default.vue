<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">main</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" >about</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts" >posts</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>