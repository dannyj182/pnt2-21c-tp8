import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './componentes/Index.vue'
import Formulario from './componentes/Formulario.vue'
import HttpClient from './componentes/HttpClient.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/index', component: Index },
        { path: '/formulario', component: Formulario },
        { path: '/http-client', component: HttpClient },
    ]
})