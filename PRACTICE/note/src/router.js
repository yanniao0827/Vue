import {createRouter, createWebHistory} from 'vue-router'
import NoteGrid from './components/NoteGrid.vue'

const routes=[
    {path:'/',name:'NoteGrid',component: NoteGrid}
]

const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router