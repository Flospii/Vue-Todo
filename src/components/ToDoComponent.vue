<template>
  <div @click="toggleTodo()" class="cursor-pointer flex justify-between items-center p-2 m-2"
   :class="{'bg-green-500': this.todo.done, 'bg-red-500': !this.todo.done}" >
    <h1 >{{todo.todo}}</h1>
    <p>{{ formatDate(todo.creationTimestamp) }}</p>
   <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" @click="deleteTodo()">Löschen</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoComponent',
  props: ["todoprop", "todoindex", "creationTimestamp"],
  data() {
    return {
      todo: this.todoprop,
    };
  },
  methods:{
    toggleTodo(){
      this.$emit("toggledone-index", this.todoindex);
    },
    deleteTodo(){
      this.$emit("deleteTodo-index", this.todoindex);
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
      return date.toLocaleString('en-US', options);
    },
  },
};
</script>

