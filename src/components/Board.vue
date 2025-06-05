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

function getStoneImage(stoneIndex) {
  return new URL(`../assets/images/stone${stoneIndex + 1}.png`, import.meta.url).href;
}
</script>
<template>
  <div id="board">
    <div v-for="stone in stones" class="stone" :key="stone.id">
        <Position :key="stone.id" :stoneId="stone.id" player="PlayerOne" :stoneImage="getStoneImage(stone.id)" />
          <div :class="stone.Winner"
            class="stoneImage"
            :style="{ backgroundImage: `url(${ getStoneImage(stone.id) })` }"
          ></div>
        <Position :key="stone.id" :stoneId="stone.id" player="PlayerTwo" :stoneImage="getStoneImage(stone.id)" />
      </div>
  </div>
</template>
<style scoped>
div#board {
  margin: auto;
  border-collapse: separate;
  border: 1px solid black;
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

div.stoneImage {
  height: 15vh;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
}

div.stoneImage.One, div.stoneImage.Two {
  background: none;
}
</style>
