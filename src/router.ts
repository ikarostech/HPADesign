import Vue from 'vue';
import Router from 'vue-router';
import Aerodynamics from './components/04_product/Aerodynamics/Aerodynamics.vue';

import DrawingAirfoil from './components/04_product/DrawingAirfoil/DrawingAirfoil.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/aerodynamics',
            name: 'aerodynamics',
            component: Aerodynamics
        },
        {
            path: '/test',
            name: 'test',
            component: DrawingAirfoil
        }
    ]
})