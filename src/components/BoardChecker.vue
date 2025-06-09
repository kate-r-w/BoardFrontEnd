<script setup>
import Board from './Board.vue';
import AddAnyCard from './AddAnyCard.vue';
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
    <Board :stones="stones">
      <template #addanycard="{ stoneId, player }">
        <AddAnyCard :stoneId="stoneId" :player="player" />
      </template>
    </Board>
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
