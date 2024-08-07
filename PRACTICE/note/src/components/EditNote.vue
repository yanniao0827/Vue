<script setup>
import { ref,computed } from 'vue';
import { noteStore } from '../store/noteStore';
import{ useRoute } from 'vue-router';
import { watch } from 'vue';

const route=useRoute();
const todoStore=noteStore();
const currentNote = computed(() => todoStore.notes.find(note => note.id === parseInt(route.params.id)));

const noteTitle=ref(currentNote.value ? currentNote.value.title : '');
const noteContent=ref(currentNote.value ? currentNote.value.content : '');


</script>

<template>
 <div class="container">
<form >
  <div class="mb-3">
    <label for="title" class="form-label">標題</label>
    <input v-model="noteTitle" type="text" class="form-control" id="title" placeholder="請輸入標題">
    <!-- {{ noteTitle }} -->
  </div>
  <div class="mb-3">
    <label for="noteContent" class="form-label">筆記內容</label>
    <textarea v-model="noteContent" name="content" id="content" class="form-control" rows="3" placeholder="請輸入筆記內容">{{ noteContent }}</textarea>
  </div>
  <button type="button" class="btn btn-warning" @click="addNote(noteTitle,noteContent)">UPDATE</button>
</form>

    </div>
</template>

<style scoped>

</style>