<template>
<button id="show" @click="handleClick">{{text}}</button>
</template>

<script setup>
import {ref} from 'vue'
const text=ref('點我')
function handleClick(){
    alert('點擊成功')
}
</script>

<style scoped>
#show{
    background-color:#FFF7E9 ;
    color: #1A394A;
    border: 5px solid tomato;
}
</style>