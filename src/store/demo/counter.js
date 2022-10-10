import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 1
  }),
  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },
  actions: {
    increment () {
      this.counter++
    }
  }
})
