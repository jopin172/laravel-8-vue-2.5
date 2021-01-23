require('./bootstrap');

window.Vue = require('vue').default;

const { default: VueRouter } = require('vue-router');
//import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home';
import Noticias from './components/Noticias';
import Usuarios from './components/Usuarios';
import Contacto from './components/Contacto';

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    path: '/sistema/',
    routes: [
        {
            path: '/sistema/',
            name: 'home',
            component: Home
        },
        {
            path: '/sistema/noticias',
            name: 'noticias',
            component: Noticias
        },
        {
            path: '/sistema/usuarios',
            name: 'usuarios',
            component: Usuarios
        },
        {
            path: '/sistema/contacto',
            name: 'contacto',
            component: Contacto
        }
    ]
});

Vue.component('dashboart', require('./components/Dashboart').default);
const app = new Vue({
    el: '#app',
    router
});
