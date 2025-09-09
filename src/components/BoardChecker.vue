<script setup>
import AddAnyCard from './AddAnyCard.vue';
import Position from './Position.vue';
import Stone from './Stone.vue';
import { onMounted } from 'vue';
import { useBoardStore } from '../stores/boardChecker';
import { ref } from 'vue';

const boardStore = useBoardStore();
const stones = ref(boardStore.stones);
onMounted(() => {
  boardStore.getDeck();
});

</script>

<template>
  <div id="board">
    <template v-for="stone in stones" :key="stone.id">
      <Position :stoneId="stone.id" player="playerOne" :stone="stone">
      </Position>
    </template>
    <template v-for="stone in stones" :key="stone.id">
      <AddAnyCard :stone="stone" player="playerOne"></AddAnyCard>
    </template>
    <template v-for="stone in stones">
      <Stone :isHidden="stone.winner != null" :stoneId="stone.id" />
    </template>
    <template v-for="stone in stones" :key="stone.id">
      <AddAnyCard :stone="stone" player="playerTwo"></AddAnyCard>
    </template>
    <template v-for="stone in stones">
      <Position :stoneId="stone.id" player="playerTwo" :stone="stone">
      </Position>
    </template>
  </div>
</template>

<style scoped>
div#board {
  display: grid;
  height: 97vh;
  width: 97vw;
  grid-template-columns:
    repeat(9, 1fr);
  grid-template-rows:
    35% 10% 10% 10% 35%;
  justify-content: center;
  align-items: center;
}
</style>
