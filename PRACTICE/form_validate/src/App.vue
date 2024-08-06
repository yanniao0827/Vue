<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Register from './components/Register.vue';
import DataSend from './components/DataSend.vue';
import { ref } from 'vue';
const appMsg=ref('父組件的預設訊息');
const money=ref(38000);
let receiveMessage = ref('預設訊息');
function updateMessage(newMsg){
  receiveMessage.value = newMsg
}
</script>

<template>
<!-- <Register /> -->
 <p>子組件傳入:</p>
 <p>{{ receiveMessage }}</p>
<DataSend :appMsg="appMsg" :money="money" @update:msg="updateMessage"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
