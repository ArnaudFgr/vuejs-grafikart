new Vue({
  el:'#app',
  data:{
    message: 'Salut les gens',
    link: 'https://github.com/Aarnow/vuejs-grafikart',
    success: true,
    persons: ['John', 'Nathan', 'Marion', 'Nicolas', 'Marco']
  },

  methods:{
    close: function () {
      this.message = 'fermé',
      this.success = false
    }
  }
})