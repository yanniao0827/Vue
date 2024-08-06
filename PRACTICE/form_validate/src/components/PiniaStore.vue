<script setup>
import {ref} from 'vue'
// 這裡的testStore是在stores/testStore中就取好名，不能更改
import {testStore} from '../stores/testStore';
// 讓testStore的值可以在這個檔案中被引用
const todoStore=testStore();

import {storeToRefs} from 'pinia';
const {finishTodos} = storeToRefs(todoStore);

const{addTodo,toggleTodo}=todoStore;
const newItem=ref('');

</script>

<template>
    <h1>Pinia狀態管理</h1>
    <div class="container">
        <input type="text" v-model="newItem">
        <button @click="addTodo(newItem)">新增待辦</button>
        <p>代辦事項</p>
        <ul class="list">
            <li class="item" v-for="item in todoStore.todos.filter(item => !item.isFinished)" @click="toggleTodo(item.id)">{{ item.text }}</li>
        </ul>
        <p>已完成</p>
        <ul class="list">
            <li class="item" v-for="item in finishTodos" >{{ item.text }}</li>
            <!-- <div class="toggle" v-if="todoStore.isFinished" @click="todoStore.toggleTodo(todoStore.id)"></div> -->
        </ul>
    </div>
</template>

<style scoped>
input{
    width: 100%;
}
button{
    margin-top: 20px;
    margin-bottom: 20px;
}
li:hover{
    font-size: 25px;
    color: orange;
}
</style>