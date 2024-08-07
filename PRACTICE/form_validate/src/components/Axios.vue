<script setup>
import axios from 'axios';
import {ref,onMounted} from 'vue';

const post=ref([]);
onMounted(async()=>{
    try{

    }catch(error){
        console.log('失敗：',error)
    }
})
</script>

<template>
<h1>Axios載入資料</h1>
</template>

<style scoped></style>