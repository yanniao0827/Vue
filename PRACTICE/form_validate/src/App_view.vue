<script setup>
import PiniaStore from './components/PiniaStore.vue';
import { testStore } from './stores/testStore';
import { ref } from 'vue';
const todoStore = testStore();

</script>

<template>
<ul>
  <li>
    <router-link to="/pinia">
      Pinia狀態管理 
    </router-link>
  </li>
  <li>
    <router-link to="/register">
      表單驗證
    </router-link></li>
  <li>
    <router-link to="/dataSend">
      父子組件傳值
    </router-link>
  </li>
</ul>

<div class="container">
  <router-view></router-view>
</div>
</template>

<style scoped>
.container{
  margin-top: 20px;
}
</style>
