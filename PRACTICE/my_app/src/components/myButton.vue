<script setup>
import {ref} from 'vue'
const text=ref('點我')
</script>

<template>
<button id="show">{{text}}</button>
</template>

<style scoped>
#show{
    background-color: #1A394A;
    color: #FFF7E9;
}
</style>