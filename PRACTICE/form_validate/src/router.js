import {createRouter, createWebHistory} from 'vue-router'
import PiniaStore from './components/PiniaStore.vue'
import Register from './components/Register.vue'
import DataSend from './components/DataSend.vue'

const routes = [
    {path:'/',name:'pinia',component: () => import('./components/PiniaStore.vue')},
    {path:'/',name:'register',component: () => import('./components/Register.vue')},
    {path:'/',name:'dataSend',component: () => import('./components/DataSend.vue')}
]

const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router