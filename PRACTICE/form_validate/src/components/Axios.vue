<script setup>
import axios from 'axios';
import {ref,onMounted} from 'vue';

const post=ref([]);
onMounted(async()=>{
    try{
        // 發送請求
        const postData={
            title:'0807 vue',
            body:'測試發送請求',
            userId:1
        }
        const apiURL='https://jsonplaceholder.typicode.com/posts';
        axios.post(apiURL,postData)
        .then((response)=>{
            console.log('請求成功：',response.data);
            // 這裡的push不會真的修改伺服器端的
            post.value.push(response.data)
        })
        .catch((error)=>{
            console.log('請求失敗：',error);
            
        })

        // 接收傳入的資料
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