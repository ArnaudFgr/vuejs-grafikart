//diretives method one
// Vue.directive('salut', function(el, binding, vnode){
//     console.log(el, binding)
//     el.value = binding.value
// })

let madirect = function(el, binding){
    el.value = binding.value
    console.log('bind')
}

Vue.filter('capitalize', function(value, prefix, suffix){
  return prefix + value.toUpperCase() + suffix
})

Vue.filter('reverse', function(value){
  return value.split('').reverse().join('')
})

//component method one
// Vue.component('mon-compo',{
//   props: {
//     type: { type: String, default: 'blue'},
//     sms: String
//   },
//   template: `<div :class='type'>{{sms}}</div>`
// })

let smsblock = {
  props: {
    type: { type: String, default: 'blue'},
    sms: String
  },
  template: `<div :class='type'>
  {{sms}}
  </div>`
}

let counter = {
  data:function (){
    return {
      count: 0
    }
  },
  props: {
    start: {type: Number, default: 0}
  },
  computed: {
    total: function(){
      return this.start + this.count
    }
  },
  methods:{
    increment: function(){
      this.count++
    }
  },
  template: `<button @click="increment">{{ total }}</button>`

}

let vm = new Vue({
  el:'#app',
  data:{
    message: 'Salut les gens',
    link: 'https://github.com/Aarnow/vuejs-grafikart',
    success: true,
    cls: 'green',
    persons: ['John', 'Nathan', 'Marion', 'Nicolas', 'Marco']
  },

  methods:{
    close: function () {
      this.message = 'fermé',
      this.success = false
    },
    addPerson: function () {
      this.persons.push('Merlin');
    }
  }
})

let timer = new Vue ({
  el:'#timer',
  data:{
    seconds: 0
  },
  mounted: function(){
    this.$interval = setInterval(() => {
      this.seconds++
    }, 1000)
  },
  destroyed: function(){
    clearInterval(this.$interval);
  }
})

let watcher = new Vue({
  el:'#watcher',
  data:{
    success: false,
    message: '',
    firstname: 'Bob',
    lastname: 'Lennon'
  },
  watch:{
    fullname: function(value){
      console.log('watch', value)
    }
  },
  computed:{
    cls: function(){
      console.log('cls called')
      return this.success === true ? 'green' : 'red'
    },
    fullname: {
      get: function(){
        return this.firstname + ' ' + this.lastname
      },
      set: function (value){
        let parts = value.split(' ')
        this.firstname = parts[0]
        this.lastname = parts[1]
      }
    }
  }
})

let event = new Vue ({
  el:'#event',
  components: { 
    smsblock, counter
  },
  directives:{
    madirect
  },
  data:{
    msglazy: "super lazy",
    message: "Bonjour à tous",
    sms: "hi"
  },
  methods:{
    demo: function (){
      console.log('Salut la demo')
    }
  }
})