import Vue from "vue";
import VueRouter from "vue-router";
import TodosJS from "src/components/TodoJS.vue";
import TodosPrac from "src/components/TodosPrac.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "TodosJS",
    component: TodosJS,
  },
  {
    path: "/prac",
    name: "Prac",
    component: TodosPrac,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router