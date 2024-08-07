<script setup>
import axios from 'axios';
import {ref,onMounted} from 'vue';

const post=ref([]);
onMounted(async()=>{
    try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
        post.value=response.data
        console.log(post.value);
        
    }catch(error){
        console.log('失敗：',error)
    }
});
</script>

<template>
<h2>Axios載入資料</h2>
<ul>
    <li v-for="post in post">{{ post.title }}</li>
</ul>
    
</template>

<style scoped></style>