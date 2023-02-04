<template>
    <div class="content__wrapper">
        <header-component></header-component>
        <input class="todoList__input" @keyup.enter="addTodo" placeholder="무엇을 해야할까요?"/>
        <div class="main">
            <div v-show="Todos.length" class="checkbox__wrapper">
                <input type="checkbox"  class="checkbox__all" autofocus>
                <label>모두 완료</label>
            </div>

            <ul class="todoList">
                <li class="todoList__todo"
                v-for="todo in Todos" :key="todo.id">
                    <div class="todoList__view">
                        <input type="checkbox" class="checkbox__toggle">
                        <label>{{todo.title}}</label>
                        <button class="btn__delete" @click="removeTodo(todo)">-</button>
                    </div>
                </li>
            </ul>
        </div>
        <footer-component></footer-component>
    </div>
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
                {id: 1, title: '할일할일할일', completed: false },
                {id: 2, title: '할일할일할일2', completed: false },
            ]
        }
    },
    methods: {
        addTodo(e) {
            const value = e.target.value.trim()
            if (!value) {
                return
            }
            this.Todos.push({
                id: Date.now(),
                title: value,
                completed: false
            })
            e.target.value = ''
        },
        removeTodo(todo) {
            this.Todos.splice(this.Todos.indexOf(todo), 1)
        },
    }
}
</script>

<style lang="scss" scoped>
.content__wrapper {
    width: 100%;
    
    
    .todoList__input {
        width: 50vw;
        height: 5vw;
        .main {
            width: 50vw;
            .checkbox__wrapper {
                width: 100%;
                display: flex;
                justify-content: center;
                position: relative;
                display: flex;
            }
            .todoList__view{
                position: relative;

                .checkbox__toggle {
                    position: absolute;
                }
            }
        }
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
}
</style>