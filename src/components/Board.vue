<script setup>
import Position from './Position.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useBoardStore } from '../stores/board';

const boardStore = useBoardStore();
onMounted(() => {
  boardStore.getDeck();
});

var stones = ref([
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
]);

defineProps({
})
</script>

<template>
  <table id="board">
    <tr class="otherPlayer">
      <Position v-for="(stone, index) in stones" :key="index">
      </Position>
    </tr>
    <tr class="stone">
      <td v-for="(stone, index) in stones" :key="index">
        <div class="stoneImage"></div>
      </td>
    </tr>
    <tr class="myPlayer">
      <Position v-for="(stone, index) in stones" :key="index">
      </Position>
    </tr>
  </table>
</template>

<style scoped>
table#board {
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
td {
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
}
div.stoneImage {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
}
</style>
