<template>
  <router-view></router-view>
  <TodosJS></TodosJS>
</template>

<script>
import TodosJS from './components/TodosJS.vue';


export default {
  name: 'App',
  components: {
    TodosJS
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
