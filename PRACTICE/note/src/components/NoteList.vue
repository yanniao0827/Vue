<script setup>
import { ref } from 'vue';
import {noteStore} from '../store/noteStore';
import {storeToRefs} from 'pinia';
const todoStore = noteStore();
const {finishNotes}=storeToRefs(todoStore);
</script>

<template>
    <h2 class="mb-4">筆記列表</h2>
    <button class="btn btn-dark mb-4">新增</button>
    <div class="important mb-4">
        <h4><i class="fa-solid fa-bookmark me-2 text-danger"></i>重要筆記</h4>
        <ul class="list-group">
            <li v-for="pin in finishNotes" class="list-group-item d-flex justify-content-between">
                {{pin.title}}
            <div class="icon-group ">
                <i class="fa-solid fa-heart me-3 text-danger"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            </li>
        </ul>
    </div>

    <div class="all">
        <h4><i class="fa-solid fa-book me-2"></i>所有筆記</h4>
        <ul class="list-group">
            <li class="list-group-item"><i class="fa-solid fa-play me-2"></i>An item</li>
            <li class="list-group-item"><i class="fa-solid fa-play me-2"></i>A second item</li>
            <li class="list-group-item"><i class="fa-solid fa-play me-2"></i>A third item</li>
            <li class="list-group-item"><i class="fa-solid fa-play me-2"></i>A fourth item</li>
            <li class="list-group-item"><i class="fa-solid fa-play me-2"></i>And a fifth one</li>
        </ul>
    </div>
</template>

<style scoped></style>