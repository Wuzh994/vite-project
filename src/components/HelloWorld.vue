<template>
  <h2>Vue 3.x + Vite 3.x + Pinia 2.x + Vue-Router 4.x</h2>
  <p>ESLint, Stylelint, Prettier, Husky + lint-staged</p>
  <span @click="handleClick">{{ num }}</span>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(0)

if (num.value === 0) num.value = 5

function handleClick () {
  console.log(1111)
}
</script>
