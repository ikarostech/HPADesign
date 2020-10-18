import Vue from 'vue';
import Router from 'vue-router';
import Aerodynamics from './components/04_product/Aerodynamics/Aerodynamics.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/aerodynamics',
            name: 'aerodynamics',
            component: Aerodynamics
        }
    ]
})