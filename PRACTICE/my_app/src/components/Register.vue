<script setup>
import { ref } from 'vue';
const name=ref('')
const phone=ref('')
const bday=ref('')
const gender=ref('')
const error=ref('')
const errorStyle=ref({color:'red', fontWeight:'bold'});
const validate=ref(false)
const checkForm=()=>{
    if(!name.value && !phone.value && !bday.value && !gender.value){
    error.value='請填寫欄位'
    validate.value=false
    }
    else{
        error.value=''
        validate.value=true
        alert('驗證成功')
    }
};

</script>

<template>
    <h1>表單驗證</h1>
    <form id="myForm" @submit.prevent="checkForm">
        <label for="name">姓名</label>
        <input type="text" placeholder="請輸入姓名" v-model="name" @input="error=''">
        <span v-if="error" :style="errorStyle">{{ error }}</span>

        <label for="phone">電話</label>
        <input type="text" placeholder="請輸入電話" v-model="phone">
        <span v-if="error" :style="errorStyle">{{ error }}</span>

        <label for="bday">生日</label>
        <input type="date" placeholder="請選擇生日" v-model="bday">
        <span v-if="error" :style="errorStyle">{{ error }}</span>

        <label for="gender">性別</label>
        <div class="form-check">
            <input type="radio" v-model="gender" value="男"><label for="male">男</label>
            <input type="radio" v-model="gender" value="女"><label for="female">女</label>
        </div>
        <span v-if="error" :style="errorStyle">{{ error }}</span>

        <input type="submit">
    </form>

    <div v-show="validate===true">
    <p>姓名:{{name}}</p>
    <p>電話:{{phone}}</p>
    <p>生日:{{bday}}</p>
    <p>性別:{{gender}}</p>
</div>
</template>

<style scoped>
.form-check{
    display:flex;
}

#myForm{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
}
</style>