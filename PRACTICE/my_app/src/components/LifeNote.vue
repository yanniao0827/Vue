<script setup>
import { ref,onUpdated,onUnmounted } from 'vue';
const note=ref('')
const updateLocalStorage = () => {
    // 我希望可以存取我即時輸入的筆記到localStorage
    localStorage.setItem('userNote', note.value);
}
onUpdated(()=>{
    updateLocalStorage();
    console.log('筆記已更新');
})
// 確保關閉前也有更新LocalStorage
onUnmounted(()=>{
    updateLocalStorage();
    console.log('筆記已刪除');
})
</script>

// 用{{}}包起來是vue的插值語法
// v-model為雙向綁定的語法，在這裡雙向綁訂了input以及{{note}}，此時在input輸入文字會值時顯示在p標籤裡面
<template>
<h1>筆記</h1>
<input type="text" placeholder="輸入筆記" v-model="note">
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