<script setup>
import { ref,reactive,onUpdated,onUnmounted } from 'vue';
const note=ref('')
const text=ref('輸入樣式')
const a=ref(30)
const b=ref(40)
// 寫已定義好的樣式名稱
let classStyle=ref('font50')
let isFont30=ref(true)
const livers=reactive(['Shu','Alban','Doppi','Sonny'])
const gender=ref('男')

const testStyle=ref({color:'tomato', fontSize:'25px', fontWeight:'bold'})
const updateLocalStorage = () => {
    // 我希望可以存取我即時輸入的筆記到localStorage
    localStorage.setItem('userNote', note.value);
}
onUpdated(()=>{
    updateLocalStorage();
    console.log('isFont30',isFont30);
})
// 確保關閉前也有更新LocalStorage
onUnmounted(()=>{
    updateLocalStorage();
    console.log('筆記已刪除');
})
function showLiver(liver){
    alert('你的推是'+liver)
}
function showMsg(msg){
    alert(msg)
}
</script>

// 用{{}}包起來是vue的插值語法
// v-model為雙向綁定的語法，在這裡雙向綁訂了input以及{{note}}，此時在input輸入文字會值時顯示在p標籤裡面
// v-bind為樣式繫節語法，:style="(自訂的樣式名稱)"就可以代入自訂樣式，v-bind可以省略
// v-if、v-else為條件渲染語法，當條件為true時才會顯示，因為我isFont30已經設定成true，因此顯示font30
// v-for為迴圈渲染語法，name in livers中，name可以自訂，我也可以用liver in livers，livers是我上面設定的固定名稱，不可以更改
<template>
<h1>筆記</h1>
<input type="text" :placeholder="text" v-model="note" @change="showMsg(note)">
<p :style="testStyle">Note長度:{{ note.length }}</p>
<img v-show="note.length>10" src="/img6.jpg" :alt="note">
<p :class="note">Calculate one: {{ 2+4 }}</p>
<p>Calculate two: {{ a*b }}</p>
<p v-if="note === 'font30'">font30</p>
<p v-else>font10</p>
<ul id="liverList">
    <li v-for="name in livers" @click="showLiver(name)">{{ name }}</li>
</ul>
<ul id="liverList2">
    <li v-for="(liver,index) in livers" @click="showLiver(liver,index)">{{ index+1 }}-{{ liver }}</li>
</ul>
<form action="" id="myForm">
    <select name="" id="">
        <option v-for="(liver1,index) in livers" :value="liver1" @change="showLiver(liver1,index)">{{ liver1,index }}</option>
    </select>
    <input type="radio" name="gender" v-model="gender" checked>男
    <input type="radio" name="gender" v-model="gender">女
</form>

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
li:hover{
    color: aqua;
    font-size: 40px;
}
</style>