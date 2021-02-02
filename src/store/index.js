import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 0, text: 'take a photograph',date: '1/2/21', isDone: false },
      { id: 1, text: 'get uni paper',date: '1/2/21', isDone: false },
      { id: 2, text: 'buy clothes',date: '1/2/21', isDone: false },
      { id: 3, text: 'buy ticket',date: '1/2/21', isDone: false },
    ],
  },
  mutations: {
    ADD_TODO: (state, payload) => {
      // generate Random ID
      let generateId = Math.random().toString(36).substr(2, 9);
      const todo = {...payload, id: generateId}
      state.todos = [...state.todos, todo];
    },
    DELETE_TODO: ( state, payload ) => {
      let filterTodo = state.todos.filter(todo => todo.id !== payload);
      // console.log(filterTodo)
      state.todos = filterTodo;
    },
    COMPLETE_TODO: (state, payload) => {
      const markTodoDone = state.todos.map(todo => {
        if(todo.id === payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
      state.todos = markTodoDone
    }
  },
  actions: {
    addTodo: (context, payload) => {
      context.commit('ADD_TODO', payload);
    },
    deleteTodo: (context, payload) => {
      context.commit('DELETE_TODO', payload);
    },
    completeTodo: (context, payload) => {
      context.commit('COMPLETE_TODO', payload);
    }
  },
})
