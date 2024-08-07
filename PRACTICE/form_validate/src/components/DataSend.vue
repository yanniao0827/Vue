<script setup>
import { ref } from 'vue';
// 接受父組件傳過來的值
const props=defineProps({
    appMsg:String,
    money:Number
})
let message=ref(props.appMsg);
let salary=ref(props.money);
const emit=defineEmits(['update:msg'])
function sendMsg(){
    emit('update:msg',message.value)
}
</script>

<template>
    <h1>以下是子組件</h1>
    <h2>{{message}}</h2>
    <h3>薪水：{{ salary  }}</h3>
    <input type="text" v-model="message">
    <button type="button" @click="sendMsg">送訊息給父組件</button>
</template>

<style scoped>
h2{
    color: tomato;
}
input{
    width: 300px;
    margin-right: 20px;
}
</style>