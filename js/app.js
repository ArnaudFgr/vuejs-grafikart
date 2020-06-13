// Vue.directive('salut', function(el, binding, vnode){
//     console.log(el, binding)
//     el.value = binding.value
// })

let madirect = function(el, binding){
    el.value = binding.value
    console.log('bind')
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
  directives:{
    madirect
  },
  data:{
    msglazy: "super lazy",
    message: "msg"
  },
  methods:{
    demo: function (){
      console.log('Salut la demo')
    }
  }
})