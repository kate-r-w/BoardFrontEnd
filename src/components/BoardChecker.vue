<script setup>
import Board from './Board.vue';
import { onMounted } from 'vue';
import { useBoardStore } from '../stores/boardChecker';
import { ref } from 'vue';

const boardStore = useBoardStore();
onMounted(() => {
  boardStore.getDeck();
});

const stones = ref(boardStore.stones);
</script>
<template>
  <div id="board">
    <Board :stones="stones"/>
  </div>
</template>
<style scoped>
div#board {
  margin: auto;
  border-collapse: separate;
  height: 97vh;
  width: 97vw;
  display: flex;
}
</style>
