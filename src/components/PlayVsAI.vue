<script setup>
import Board from './BoardChecker.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useBoardStore } from '../stores/board';

const boardStore = useBoardStore();
onMounted(() => {
  boardStore.getDeck();
});

var stones = ref(boardStore.stones);
</script>
<template>
  <div class="play-vs-ai">
    <Board />
    <div>hand goes here</div>
  </div>
</template>

<style scoped>
</style>