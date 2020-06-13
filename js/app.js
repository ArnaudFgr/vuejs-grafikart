class NotificationsStore{
  constructor(){
    this.state = {
      count: 0
    }
  }

  increment(){
    this.state.count++
  }

  decrement(){
    this.state.count--
  }
}

//instances
let notifications_store = new NotificationsStore()

//COMPONENTS
let Counter = {
  data: function (){
    return {
      state: notifications_store.state
    }
  },
  methods:{
    increment (){
      notifications_store.increment()
    }
  },
  template: `<button @click="increment">{{ state.count }}</button>`
}

let Notifications = {
  components: { Counter },
  methods:{
    addNotification (){
      notifications_store.increment()
    }
  },
  template: 
  `<div>
    <counter></counter>
    <button @click="addNotification">increment</button>
  </div>`
}

//VUES
new Vue({
  el: '#app',
  components: { Notifications, Counter }
})