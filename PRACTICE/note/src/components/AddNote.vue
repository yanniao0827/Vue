<script setup>
import { ref } from 'vue';
import { noteStore } from '../store/noteStore';
const todoStore=noteStore();
const {addNote}=todoStore;

const noteTitle=ref('');
const noteContent=ref('');
</script>

<template>
    <div class="container">
<form >
  <div class="mb-3">
    <label for="title" class="form-label">標題</label>
    <input v-model="noteTitle" type="text" class="form-control" id="title" placeholder="請輸入標題">
  </div>
  <div class="mb-3">
    <label for="noteContent" class="form-label">筆記內容</label>
    <textarea v-model="noteContent" name="content" id="content" class="form-control" rows="3" placeholder="請輸入筆記內容"></textarea>
  </div>
  <button type="button" class="btn btn-warning" @click="addNote(noteTitle,noteContent)">SAVE</button>
</form>

    </div>

</template>

<style scoped>

</style>