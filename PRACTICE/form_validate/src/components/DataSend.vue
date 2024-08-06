<script setup>
import { ref } from 'vue';
// 接受父組件傳過來的值
const props=defineProps({
    appMsg:String,
    money:Number
})
let message=ref(props.appMsg);
let salary=ref(props.money);
</script>

<template>
    <h2>{{message}}</h2>
    <h3>薪水：{{ salary  }}</h3>
</template>

<style>
h2{
    color: tomato;
}
</style>