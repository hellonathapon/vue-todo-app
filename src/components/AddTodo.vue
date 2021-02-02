<template>
    <div class="add-todo">
        <b-form-input v-model="textInput" v-on:keyup.enter="addTodo" placeholder="Enter your to do here" class="form" size="lg"></b-form-input>
        <!-- <b-button pill variant="outline-info" v-on:click="addTodo">Button</b-button> -->
    </div>
</template>

<script>
export default {
    name: 'AddTodo',
    data: () => ({
        textInput: '',
    }),
    methods: {
        addTodo: function() {
            const TodoPayload = { 
                text: this.textInput,
                date: new Date().toLocaleDateString(), 
                isDone: false 
            };
            // dispatch to store
            return this.$store.dispatch('addTodo', TodoPayload)
            .then(() => this.textInput = '')
            .catch(err => console.error(err))
        }
    }
}
</script>

<style scoped>
    .add-todo {
        grid-area: a;
        grid-row: 1 / 3;
        background: linear-gradient(87deg,#2dce89,#2dcecc);
        box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
        padding-top: 2rem;
        min-height: 40vh;
    }
    .form {
        width: 90%;
        margin: 0 auto;
    }
</style>