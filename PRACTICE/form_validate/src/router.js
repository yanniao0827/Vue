import {createRouter, createWebHistory} from 'vue-router'
import PiniaStore from './components/PiniaStore.vue'
import Register from './components/Register.vue'
import DataSend from './components/DataSend.vue'
import Axios from './components/Axios.vue'

const routes = [
    {path:'/pinia',name:'pinia',component: PiniaStore},
    {path:'/register',name:'register',component: Register},
    {path:'/dataSend',name:'dataSend',component: DataSend},
    {path:'/axios',name:'axios',component: Axios}
]

const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router