<script setup>
import { ref,onUpdated,onUnmounted } from 'vue';
const note=ref('')
const text=ref('輸入樣式')
const a=ref(30)
const b=ref(40)
// 寫已定義好的樣式名稱
let classStyle=ref('font50')
let isFont30=ref(true)

const testStyle=ref({color:'tomato', fontSize:'25px', fontWeight:'bold'})
const updateLocalStorage = () => {
    // 我希望可以存取我即時輸入的筆記到localStorage
    localStorage.setItem('userNote', note.value);
}
onUpdated(()=>{
    if(note=='font30'){
        isFont30=true
    }else{
        isFont30=false
    }
    updateLocalStorage();
    console.log('isFont30',isFont30);
})
// 確保關閉前也有更新LocalStorage
onUnmounted(()=>{
    updateLocalStorage();
    console.log('筆記已刪除');
})
</script>

// 用{{}}包起來是vue的插值語法
// v-model為雙向綁定的語法，在這裡雙向綁訂了input以及{{note}}，此時在input輸入文字會值時顯示在p標籤裡面
// v-bind為樣式繫節語法，:style="(自訂的樣式名稱)"就可以代入自訂樣式，v-bind可以省略
// v-if、v-else為條件渲染語法，當條件為true時才會顯示，因為我isFont30已經設定成true，因此顯示font30
<template>
<h1>筆記</h1>
<input type="text" :placeholder="text" v-model="note">
<p :style="testStyle">Note:{{ note }}</p>
<p :class="classStyle">Calculate one: {{ 2+4 }}</p>
<p>Calculate two: {{ a*b }}</p>
<p v-if="isFont30 ==true">font30</p>
<p v-else>font10</p>
</template>


<style scoped>
input{
    height: 30px;
    width: 250px;
    border-radius: 40px;
    padding-left: 15px;
    border: 1px solid white
}
.font15{
    font-size: 15px
}
.font50{
    font-size: 50px;
    color:grey
}
</style>