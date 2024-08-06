<script setup>
import PiniaStore from './components/PiniaStore.vue';
import { testStore } from './stores/testStore';
import { ref } from 'vue';
const todoStore = testStore();
</script>

<template>
<PiniaStore />
<!-- <h3>從父組件呼叫pinia資料</h3>
<ul class="list">
  <li v-for="item in todoStore.todos">{{ item.text }}</li>
</ul> -->
</template>

<style scoped>

</style>
