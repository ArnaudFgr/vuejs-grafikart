<template>
  <div class="counter">
    {{ count }}
    <div class="counter__button" @click="increment">+</div>
  </div>
</template>

<script>
import store from './store/NotificationsStore'
  export default{
    data () {
      return {
        state: store.state
      }
    },
    computed:{
      count (){ return this.state.count}
    },
    methods: {
      increment () {
        store.increment()
      }
    }
  }
</script>

<style>
  .counter{
    font-weight: bold;
    width: 80px;
    height: 80px;
    text-align: center;
    background-color: #dfdfdf;
  }
</style>