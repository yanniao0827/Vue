<template>
<button id="show" @click="handleClick">{{text}}</button>
</template>

<script setup>
import { onMounted } from 'vue';
import { onBeforeMount } from 'vue';
import {ref} from 'vue'
const text=ref('點我')
function handleClick(){
    alert('點擊成功')
}
onBeforeMount(() => {
    alert("Mounted準備啟動")
})
onMounted(() => {
    alert("Mounted啟動 顯示畫面")
})
</script>

<style scoped>
#show{
    background-color:#FFF7E9 ;
    color: #1A394A;
}

#show:hover{
    background-color:tomato ;
    color: #FFF7E9 ;
}
</style>