<template>
    <header-component></header-component>
    <input class="todoList__input" placeholder="무엇을 해야할까요?"/>
    <div class="main">
        <div class="checkbox__wrapper">
            <input type="checkbox" class="checkbox__all" autofocus>
            <label>모두 완료</label>
        </div>

        <ul class="todoList">
            <li class="todoList__todo"
            v-for="todo in Todos" :key="todo.id">
                <div class="todoList__view">
                    <input type="checkbox" class="checkbox__toggle">
                    <label>{{todo.title}}</label>
                    <button class="btn__delete">-</button>
                </div>
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
.main {
    width: 80vw;
}
.checkbox__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}
li {
    list-style:none;
}
.btn__delete {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    border: 1px solid gray;
    background-color: black;
    color: white;
    font-size: 15px;
}
</style>