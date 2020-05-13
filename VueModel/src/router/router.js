import Vue from 'vue';
import Router from 'vue-router';
import StartPage from '../components/StartPage.vue'
import Home from '../components/Home.vue'
import CreatePage from '../components/CreatePage.vue';

Vue.use(Router);

export default new Router({
    mode: "history", 
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/startPage',
            component: StartPage
        },
        {
            path: '/createpage',
            component: CreatePage
        }
    ]
})