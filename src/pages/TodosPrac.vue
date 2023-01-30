<template>
    <header-component></header-component>
    <input class="todoList__input" placeholder="무엇을 해야할까요?"/>
    <div class="main">
        <v-checkbox
            v-model="ex4"
            label="primary"
            color="primary"
            value="primary"
            hide-details
          ></v-checkbox>
        <input class="checkbox__all" autofocus>
        <label>모두 완료</label>
        <ul class="todoList">
            <li class="todoList__todo"
            v-for="todo in Todos" :key="todo.id">
                <div class="todoList__view">
                    <input class="checkbox__toggle">
                    <label>{{todo.title}}</label>
                    <v-icon class="item__delete" icon="mdi-minus-circle" size="x-small"></v-icon>
                </div>
                <input>
            </li>
        </ul>
    </div>
    <footer-component></footer-component>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'TodosPrac',
    components: {
        HeaderComponent,
        FooterComponent
    },
    data () {
        return {
            Todos: [
                {id: 1, title: '할일할일할일' },
                {id: 2, title: '할일할일할일2' },
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.todoList__input {
    width: 80vw;
    height: 5vw;
}
li {
    list-style:none;
}
</style>