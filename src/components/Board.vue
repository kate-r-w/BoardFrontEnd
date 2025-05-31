<script setup>
import Position from './Position.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useBoardStore } from '../stores/board';

const boardStore = useBoardStore();
onMounted(() => {
  boardStore.getDeck();
});

var stones = ref(boardStore.stones);

defineProps({
})
</script>

<template>
  <table id="board">
    <tbody>
      <tr class="otherPlayer">
        <Position v-for="stone in stones" :key="stone.id" :stoneId="stone.id" player="PlayerOne" />
      </tr>
      <tr class="stone">
        <td v-for="stone in stones" class="stone" :key="stone.id">
          <div class="stoneImage" :class="stone.Winner"></div>
        </td>
      </tr>
      <tr class="myPlayer">
        <Position v-for="stone in stones" :key="stone.id" :stoneId="stone.id" player="PlayerTwo" />
      </tr>
    </tbody>
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
td.stone {
  height: 150px;
  vertical-align: top;
}
div.stoneImage {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
div.Two {
  margin-top: 100px;
}
div.One {
  margin-top: 0px;
}
</style>
