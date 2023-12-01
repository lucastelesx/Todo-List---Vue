const TodoList = {
  data(){
    return {
      tasks: [],
      newTask: {
        done: false
      }
    }
  },
  methods:{
    TaskHasFinished: function (item){
      item.done = !item.done
    },
    addTask: function (){
      if(this.newTask.name) {
        this.tasks.push(this.newTask);
        this.newTask = {
          done: false
        };
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
      } else {
        alert("You must fill up the field to created a new task!")
      }
    }
  },
  created(){
    this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : this.tasks;
  },
  updated(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
};

Vue.createApp(TodoList).mount('#app');