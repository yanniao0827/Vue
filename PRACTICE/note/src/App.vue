<script setup>
import TopBar from './components/TopBar.vue';
import NoteList from './components/NoteList.vue';
</script>

<template>
  <TopBar />
  <div class="container mt-4">
    <div class="row">
      <div class="col-3"><NoteList /></div>
      <div class="col-9"><router-view to="/"></router-view></div>
    </div>
  </div>

</template>

<style scoped>
.container {
  margin: 0;
}
</style>
