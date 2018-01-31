<template>
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a Vue.js component & Vuex</p>

    <button @click="incrementCounter()">Increment</button>
    <button @click="resetCounter()">Reset</button>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
  data() {
  return {
  autoCount: 0,
  }
  },

  computed: {
  ...mapState({
  })
  },

  methods: {
  ...mapActions(['setCounter']),
  },

  created() {
  }
</script>

<style>
</style>
