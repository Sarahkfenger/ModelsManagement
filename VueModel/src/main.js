import Vue from 'vue';
import App from './App.vue';
import router from './router/router'
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = true;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
