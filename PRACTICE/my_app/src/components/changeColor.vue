<script setup>
import {ref} from 'vue';
const msg=ref('')
function shoeMsg(){
    alert(msg.value)
}
</script>

<template>
    <div id="box">
        <button>Tomato</button>
        <button>Tangerine Yellow 1A394A</button>
        <button>Ora</button>
        <button>Old-lace FFF7E9</button>
        <button>Warm Light Gray 1A394A 只有一次</button>
        <button>pink 點擊滾輪</button>
        <button>aqua marine 滾動滾輪</button>
        <input type="text" v-model="msg" @keydown.enter="shoeMsg">
    </div>
</template>

<style scoped>
#box{
    margin-bottom: 20px;
}
button{
    background-color: #fff;
    color: black;
    margin-right: 10px;
}
</style>