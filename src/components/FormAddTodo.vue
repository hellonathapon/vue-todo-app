<template>
    <div class="add-todo">
        <b-form-input placeholder="Enter your Todo" class="form"></b-form-input>
        <b-button pill variant="outline-info">Button</b-button>
    </div>
</template>

<script>
export default {
    name: 'FormAddTodo',
}
</script>

<style scoped>
    .add-todo {
        grid-area: a;
        grid-row: 1 / 3;
        background: linear-gradient(87deg,#2dce89,#2dcecc);
        padding-top: 2rem;
    }
    .form {
        width: 80%;
        margin: 0 auto;
    }
</style>