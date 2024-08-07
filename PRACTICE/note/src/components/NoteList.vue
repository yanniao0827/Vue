<script setup>
import { ref } from 'vue';
import {noteStore} from '../store/noteStore';
import {storeToRefs} from 'pinia';
const todoStore = noteStore();
const {finishNotes}=storeToRefs(todoStore);
const {markPin}=todoStore;
</script>

<template>
    <h2 class="mb-4">筆記列表</h2>
    <router-link to="/add">
        <button class="btn btn-dark mb-4">新增</button>
    </router-link>

    <div class="important mb-4">
        <h4><i class="fa-solid fa-bookmark me-2 text-danger"></i>重要筆記</h4>
        <ul class="list-group">
            <li v-for="pin in finishNotes" class="list-group-item ">
                <router-link :to="{name:'edit',params:{id:pin.id}}" class="text-dark d-flex justify-content-between">
                {{pin.title}}
                <div class="icon-group ">
                    <i class="fa-solid fa-heart me-3 text-danger" @click="markPin(pin.id)"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
                </router-link>
            </li>
        </ul>
    </div>

    <div class="all">
        <h4><i class="fa-solid fa-book me-2"></i>所有筆記</h4>
        <ul class="list-group">
            <li v-for="note in todoStore.notes" class="list-group-item">
            <router-link  :to="{ name: 'edit', params: { id: note.id } }" class="text-dark d-flex justify-content-between">
                {{note.title}}
                <div class="icon-group ">
                    <i class="fa-solid fa-heart me-3" @click="markPin(note.id)"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.fa-heart:hover{
color: tomato;
}
</style>