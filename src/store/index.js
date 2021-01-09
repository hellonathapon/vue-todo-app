import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 0, text: 'take a photograph', isDone: false },
      { id: 1, text: 'get uni paper', isDone: false },
      { id: 2, text: 'buy clothes', isDone: false },
      { id: 3, text: 'buy ticket', isDone: false },
    ],
  },
  mutations: {
    ADD_TODO: (state, payload) => {
      // increment id from existing todo length
      let generateId = state.todos.length;
      const todo = {...payload, id: generateId}
      state.todos = [...state.todos, todo];
    },
  },
  actions: {
    addTodo: (context, payload) => {
      context.commit('ADD_TODO', payload)
    }
  },
})
