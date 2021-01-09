<template>
  <div class="hello">
    <FormAddTodo/>
    
    <div class="todo-list">
      <h1>Todo Lists</h1>
      <p>Some todo</p>
    </div>
    
  </div>
</template>

<script>
import FormAddTodo from './FormAddTodo.vue'

export default {
  name: 'HelloWorld',
  components: {
    FormAddTodo,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    grid-area: b;
    min-height: 300vh;
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
    padding: 1rem .8rem;
  }
</style>
