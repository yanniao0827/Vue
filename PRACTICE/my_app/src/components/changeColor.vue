<script setup>
import {ref} from 'vue';
const msg=ref('')
function shoeMsg(){
    alert(msg.value)
}

const boxColor=ref('black')
function changeColor(color){
    boxColor.value=color
};
</script>

<template>
    <div id="box" :style="{ backgroundColor: boxColor }">    </div>
        <button @click.stop="changeColor('tomato')">Tomato</button>
        <button @click.prevent="changeColor('#1A394A')">Midnight-Green</button>
        <button @click.capture="changeColor('orange')">Ora</button>
        <button @click.self="changeColor('#FFF7E9')">Old-lace</button>
        <button @click.once="changeColor('#8c8984')">Warm Light Gray 只有一次</button>
        <button @click.middle="changeColor('pink')">pink 點擊滾輪</button>
        <button @wheel.passive="changeColor('white')">white滾動滾輪</button>
        <input type="text" v-model="msg" @keydown.enter="shoeMsg">

</template>

<style scoped>
#box{
    margin-bottom: 20px;
    width: 300px;
    height: 300px;
}
button{
    background-color: #fff;
    color: black;
    margin-right: 10px;
}
</style>