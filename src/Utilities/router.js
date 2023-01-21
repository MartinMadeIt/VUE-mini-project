import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage/HomePage.vue"
import FormView from "../components/Form/FormView.vue"


const routes = [
    {path: "/", name: "home", component: <HomePage />},
    {path: "/form", name: "form", component: <FormView />},
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;