<template>
  <div class="hello">
    <AddTodo/>
    
    <div class="todo-list">
      <h1>Todo Lists</h1>
      <ul v-if="getTodos.length">
        <li v-for="item in getTodos" :key="item.id" v-on:click="completeTask( item.id )">
          <span v-bind:class="{ completed: item.isDone }">{{ item.text }}</span>
          <span>{{ item.date }}</span>
          <span>
            <span v-if="!item.isDone">Pending</span>
            <span v-else>Completed</span>
          </span>
          <b-button v-on:click="deleteTodo(item.id)" variant="outline-danger">Delete</b-button>
        </li>
      </ul>
      <p v-else>Yay! No Todo left :)</p>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddTodo from './AddTodo.vue'

export default {
  name: 'HelloWorld',
  components: {
    AddTodo,
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      getTodos: state => state.todos,
    })
  },
  methods: {
    deleteTodo: function( id ) {
      return this.$store.dispatch('deleteTodo', id);
    },
    completeTask: function( id ) {
      return this.$store.dispatch('completeTodo', id);
    }
  }
}
</script>

<style scoped>
  * {
    list-style: none;
    text-decoration: none;
  }
  .hello {
    /* min-height: 100vh; */
    background: #f8f9fe;
    display: grid;
    /* grid-template-rows: repeat(12, 1fr); */
    grid-template-areas: "a"
                         "b";
  }
  .todo-list {
    grid-area: b;
    grid-row: 2 / 12;
    background: #fff;
    width: 90%;
    margin: 0 auto;
    border-radius: .375rem;
  }

  li {
    display: flex;
    padding: .6rem 1.2rem;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
  }
  li:hover {
    background: #F5F7FA;
  }
  li span {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  li span:nth-child(1) {
    flex: 2;
  }
  li span:nth-child(2) {
    flex: 1;
  }
  li span:nth-child(3) {
    flex: 1;
  }
  li button {
    flex: 0.5;
    max-width: 100px;
    /* background: pink; */
  }
  .completed {
    text-decoration: line-through;
    color: #2ECD8B;
  }
</style>
