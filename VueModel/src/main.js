import Vue from 'vue';
import Vuelidate from 'vuelidate'
import App from './App.vue';
import router from './router/router'
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = true;
Vue.use(Vuelidate);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
