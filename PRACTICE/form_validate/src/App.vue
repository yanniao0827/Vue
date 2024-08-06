<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Register from './components/Register.vue';
import DataSend from './components/DataSend.vue';
import { ref } from 'vue';
const appMsg=ref('來自app父組件的訊息');
const money=ref(38000);
</script>

<template>
<!-- <Register /> -->
 <p>子組件傳入:</p>
 <p>預設訊息</p>
<DataSend :appMsg="appMsg" :money="money"/>
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
