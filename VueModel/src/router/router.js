import Vue from 'vue';
import Router from 'vue-router';
import StartPage from '../components/StartPage.vue'
import Home from '../components/Home.vue'
import Jobs from '../components/Jobs.vue'

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
            path: '/jobs',
            component: Jobs
        }

    ]
})