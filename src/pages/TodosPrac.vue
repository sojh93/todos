<template>
    <div class="content__wrapper">
        <header-component></header-component>
        <div class="input-wrapper w-full flex justify-center items-center relative">
            <input class="todoList__input justify-center w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @keyup.enter="addTodo" placeholder="무엇을 해야할까요?"/>
            <button class="input__button text-white absolute right-1/4 bottom-4.5 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">추가</button>
        </div>
        <div class="main">
            <div v-show="Todos.length" class="checkbox__wrapper">
                <input type="checkbox"  class="checkbox__all w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"  autofocus>
                <label>모두 완료</label>
                <button class="btn__delete" @click="removeTodos()">-</button>
            </div>

            <ul class="todoList">
                <li class="todoList__todo"
                v-for="todo in Todos" :key="todo.id"
                :class="{editing: todo === editedTodo}">
                    <div class="todoList__view">
                        <input type="checkbox" class="checkbox__toggle w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600">
                        <label @dblclick="editTodo(todo)">{{todo.title}}</label>
                        <button class="btn__delete" @click="removeTodo(todo)">-</button>
                    </div>
                    <input v-if="todo === editedTodo" class="edit" type="text" v-model="todo.title" @vnode-mounted="({ el }) => el.focus()"
                    @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.escape="cancelEdit(todo)">
                </li>
            </ul>
        </div>
        <footer-component :footer="Todos"></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';


const STORAGE_KEY = 'todoList'

/* const filters = {
    all: (todo) => Todos
} */

export default {
    name: 'TodosPrac',
    components: {
        HeaderComponent,
        FooterComponent
    },
    data () {
        return {
            // 로컬 스토리지에서 불러오기
            // 해당 키에 값이 없다면 ""로 할당한다.
            Todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
            editedTodo: null
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
        removeTodos() {
            this.Todos.length === 0
        },
        editTodo(todo) {
            this.beforeEditCache = todo.title
            this.editedTodo = todo
        },
        // 바뀐거 없으면 그대로, 
        doneEdit(todo) {
            if (!this.editedTodo) {
                return
            }
            this.editedTodo = null
            todo.title = todo.title.trim()
            if (!todo.title) {
                this.removeTodo(todo)
            }
        },
        // edit 취소 캐시에서 수정이전 타이틀로 돌아감
        cancelEdit(todo) {
            this.editedTodo = null
            todo.title = this.beforeEditCache
        },

    },
    watch: {
        Todos: {
            // 로컬 스토리지에 저장
            handler(Todos) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(Todos))
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
.content__wrapper {
    width: 100%;
    
    .todoList__input {
        height: 5vw;
        .main {
            width: 50vw;
            .checkbox__wrapper {
                width: 100%;
                display: flex;
                justify-content: center;
                position: relative;
                display: flex;
            

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