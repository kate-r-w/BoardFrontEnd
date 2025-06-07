<script setup>
import Position from './Position.vue';
import Stone from './Stone.vue';
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
  <div id="board">
    <div v-for="stone in stones" class="stone" :key="stone.id">
        <Position :key="stone.id" :stoneId="stone.id" player="PlayerOne" />
        <Stone :isHidden="stone.Winner != null" :stoneId="stone.id" />
        <Position :key="stone.id" :stoneId="stone.id" player="PlayerTwo" />
      </div>
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

div.stone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 11%;
  height: 100%;
}
</style>
