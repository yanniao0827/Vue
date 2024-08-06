<script setup>
import { reactive,ref } from 'vue';
const name=ref('');
const bday=ref('');
const phone=ref('');
const error=reactive([true,true,true]);
</script>

<template>
    <div class="container">
        <form>
  <div class="mb-3">
    <label for="name" class="form-label">姓名</label>
    <input v-model="name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
    <div v-show="name.length== 0" id="emailHelp" class="form-text text-danger" :class="{'d-none':error[0]}">請輸入姓名</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">生日</label>
    <input v-model="bday" type="text" class="form-control" id="bday">
    <div v-show="bday.length== 0" id="emailHelp" class="form-text text-danger" :class="{'d-none':error[1]}">請選擇生日</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">電話</label>
    <input v-model="phone" type="text" class="form-control" id="phone" aria-describedby="emailHelp">
    <div v-show="phone.length== 0" id="emailHelp" class="form-text text-danger" :class="{'d-none':error[2]}">請輸入電話</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<style scoped>

</style>