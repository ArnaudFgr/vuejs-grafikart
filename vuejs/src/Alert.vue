<template>
  <div>
    <transition name="fade" appear mode="out-in">
      <div class="green" v-if="visible" key="visible">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum nesciunt quibusdam blanditiis. Reprehenderit ea earum quibusdam doloremque! Ipsum deleniti dicta nobis? Eligendi eius magnam eum nemo quas facilis inventore?
      </div>
      <div class="green" v-else key="invisible">
        Losit amet consectetur adipisicing elit. Ipsa laborum nesciunt quibusdam blanditiis. Reprehenderit ea earum quibusdam doloremque! Ipsum deleniti dicta nobis? Eligendi eius magnam eum nemo quas facilis inventore?
      </div>
    </transition>
    <button @click="toggle">Toggle</button>

    <transition-group name="fade" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>

    <button @click="add">add</button>
    <button @click="shuffle">shuffle</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible : true,
      items: [1,2,3,4,5]
    }
  },
  methods:{
    toggle (){
      this.visible = !this.visible
    },
    shuffle(){
      this.items = this.items.reverse()
    },
    add(){
      this.items.push(Math.random())
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active{
    transition: opacity 1s, transform 1s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
    transform: translateX(20px);
  }
  .fade-move{
    transition: transform 2s;
  }
</style>