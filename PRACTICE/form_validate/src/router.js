import {createRouter, createWebHistory} from 'vue-router'
import PiniaStore from './components/PiniaStore.vue'
import Register from './components/Register.vue'
import DataSend from './components/DataSend.vue'

const routes = [
    {path:'/pinia',name:'pinia',component: () => import('./components/PiniaStore.vue')},
    {path:'/register',name:'register',component: () => import('./components/Register.vue')},
    {path:'/dataSend',name:'dataSend',component: () => import('./components/DataSend.vue')}
]

const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router