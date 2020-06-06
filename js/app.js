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
    setInterval(() => {
      this.seconds++
    }, 1000)
  }
})