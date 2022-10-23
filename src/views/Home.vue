<script setup>
  import { addUser, getUserList } from '@/api/demo'
  import { useCounterStore } from '@/store/demo/counter'
  ;(async () => {
    await getUserList()
    await addUser()
  })()

  const counterStore = useCounterStore()
</script>

<template>
  <h1>Home</h1>
  <h2>Count: {{ counterStore.counter }}</h2>
  <h3>Double Count: {{ counterStore.doubleCount }}</h3>
  <button @click="counterStore.increment">+</button>
</template>
