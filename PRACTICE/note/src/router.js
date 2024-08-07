import {createRouter, createWebHistory} from 'vue-router'
import NoteGrid from './components/NoteGrid.vue'
import AddNote from './components/AddNote.vue'
import EditNote from './components/EditNote.vue'

const routes=[
    {path:'/',name:'NoteGrid',component: NoteGrid},
    {path:'/add',name:'add',props:true,component: AddNote},
    {path:'/edit:id',name:'edit',props:true,component: EditNote}
]

const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router