<template>
  <div class="bg-gray-600 text-white">
    <div class="text-center border-b-2 border-black py-4">
      <h1 class="text-3xl py-4">Unsere Todos</h1>
  </div>
  <div v-for="(todo, index) in todos" :key="todo.todo">
    <ToDoComponent 
    :todoprop="todo" 
    :todoindex="index" 
    :creationTimestamp="creationTimestamp" 
    @toggledone-index="toggleDone(index)" 
    @deleteTodo-index="deleteTodo(index)"/>
  </div>
  <div class="flex justify-between items-center py-2 px-2">
    <input type="text" v-model="myText" class="border-2 border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 text-black"/>
    <button @click="addTodo(myText)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Einfügen</button>
  </div>
</div>  
</template>

<script>
import ToDoComponent from './components/ToDoComponent.vue'
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'App',
  data(){
    return{
      todos:[],
    };
  },
  methods:{
    toggleDone(index){
      this.todos[index].done = !this.todos[index].done;


      this.saveDataFromLocalStorage();
    },
    deleteTodo(index){
      console.log("App: " + index);
      this.todos.splice(index,1);
      this.saveDataFromLocalStorage();
      
    },
    
    addTodo(name){
      if(name == null || name.trim() === ""){
        return;
      }
      const todo = {_id: uuidv4(), creationTimestamp: new Date(), todo:name, done:false}
      console.log(this.i);
      this.todos.push(todo);
      this.saveDataFromLocalStorage();
    },
    saveDataFromLocalStorage(){
      localStorage.setItem("todos", JSON.stringify(this.todos))
    },
    fetchDataFromLocalStorage(){
      let data = localStorage.getItem("todos");
      if(data!=="" && data != null){
      this.todos = JSON.parse(data);
      }else{
      this.todo = [];
      }
    },
    },
  mounted(){ //Called before loading 
    this.fetchDataFromLocalStorage();
  },
  components: {
    ToDoComponent
  }
}
</script>

