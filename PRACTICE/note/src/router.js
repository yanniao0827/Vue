import {createRouter, createWebHistory} from 'vue-router'
import NoteGrid from './components/NoteGrid.vue'
import AddNote from './components/AddNote.vue'

const routes=[
    {path:'/',name:'NoteGrid',component: NoteGrid},
    {path:'/add',name:'add',component: AddNote}
]

const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router