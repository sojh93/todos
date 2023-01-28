<template>
    <h1> Todos </h1>
    <input class="todolist__input" placeholder="What needs to be done?"/>
    <div class="main" v-show="todos.length">
        <input class="checkbox__all">
        <label></label>
    </div>
</template>

<script>

export default {
    name: 'TodosPrac',
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
</style>