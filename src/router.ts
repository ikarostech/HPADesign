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
            //TODO 一時的な措置としてトップページに翼型操作のタブを出す
            path: '/',
            name: 'top',
            component: DrawingAirfoil
        }
    ]
})