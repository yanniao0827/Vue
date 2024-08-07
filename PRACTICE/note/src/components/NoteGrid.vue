<script setup>
import { ref } from 'vue';
import {noteStore} from '../store/noteStore';
import {storeToRefs} from 'pinia';
const todoStore = noteStore();
const {pinNote}=storeToRefs(noteStore);
</script>

<template>
    <h2 class="mb-4">筆記本</h2>
    <div class="container">
        <div class="row">
            <div v-for="note in todoStore.notes" :key="note.id" class="col-3 mb-5">
                <router-link :to="{ name: 'edit', params: { id: note.id } }" class="text-dark">
                    <div class="card">
                    <div class="card-body">
                    <i v-show="note.isPin" class="fa-solid fa-check"></i>
                    <h5 class="card-title">{{ note.title }}</h5>
                    <p class="card-text">{{ note.content }}
                    </p>
                    </div>
                </div>
                </router-link>

            </div>
        </div>
    </div>
</template>

<style scoped>

.card{
    margin-right: 10px;
    padding: 0.8em;
    transition: all 0.3s;
}

.card:hover{
    transform: scale(1.1);
    background-color: #FFF7E9;
    box-shadow: 3px 3px 15px #8c8984;
}

.fa-solid{
    position: absolute;
    right: 0;
    top:0;
    margin: 0.5em;
    color: tomato;
    font-weight: bold;
}


</style>