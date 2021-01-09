<template>
  <div class="hello">
    <AddTodo/>
    
    <div class="todo-list">
      <h1>Todo Lists</h1>
      <ul>
        <li v-for="item in getTodos" :key="item.id">
          <span>{{ item.text }}</span>
          <span>Status</span>
          <b-button variant="outline-danger">Button</b-button>
        </li>
      </ul>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    list-style: none;
    text-decoration: none;
  }
  .hello {
    grid-area: b;
    /* min-height: 100vh; */
    background: #f8f9fe;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
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
  }
  li span:nth-child(1) {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  li span:nth-child(2) {
    flex: 1;
  }
  li span:nth-child(3) {
    flex: 0.5;
    background: pink;
  }
</style>
