<script setup>
import { ref } from 'vue';
const note=ref('')
</script>

// 用{{}}包起來是vue的插值語法
<template>
<h1>筆記</h1>
<input type="text" placeholder="輸入筆記">
<p>Note:{{ note }}</p>
</template>


<style scoped>
input{
    height: 30px;
    width: 250px;
    border-radius: 40px;
    padding-left: 15px;
    border: 1px solid white
}
</style>