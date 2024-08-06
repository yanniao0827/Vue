<script setup>
import { reactive,ref } from 'vue';
const name=ref('');
const bday=ref('');
const phone=ref('');
const error=reactive([true,true,true]);
function err(){
    if(name.value== ''){
        error[0]=false;
    }else{
        error[0]=true;
    }
    if(bday.value== ''){
        error[1]=false;
    }else{
        error[1]=true;
    }
    if(phone.value== ''){
        error[2]=false;
    }else{
        error[2]=true;
    }
}
</script>

<template>
    <div class="container">
        <form>
  <div class="mb-3">
    <label for="name" class="form-label">姓名</label>
    <input v-model="name" type="text" @focus="err" class="form-control" id="name" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text text-danger" :class="{'d-none':error[0]}">請輸入姓名</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">生日</label>
    <input v-model="bday" type="text" @focus="err" class="form-control" id="bday">
    <div id="emailHelp" class="form-text text-danger" :class="{'d-none':error[1]}">請選擇生日</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">電話</label>
    <input v-model="phone" type="text" @focus="err" class="form-control" id="phone" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text text-danger" :class="{'d-none':error[2]}">請輸入電話</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<style scoped>

</style>