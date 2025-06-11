<script setup>
import Board from './Board.vue';
import Hand from './Hand.vue';
import { onMounted } from 'vue';
import { usePlayGameStore } from '../stores/playGame';
import { ref } from 'vue';

const gameStore = usePlayGameStore();
onMounted(() => {
  gameStore.deal();
});

const stones = ref(gameStore.stones);
const hand = ref(gameStore.playerOneHand);
</script>

<template>
  <div>
    <div id="play-vs-ai">
      <Board :stones="stones">
        <template #addcard="{ stone }">
          <div class="highlight">TEST!! {{ stone.id }}</div>
        </template>
      </Board>
    </div>
    <Hand :hand="hand"></Hand>
  </div>
</template>

<style scoped>
div#play-vs-ai {
  margin: auto;
  display: flex;
  border-collapse: separate;
  height: 80vh;
  width: 97vw;
}
div.highlight:hover {
  background-color: rgba(255, 255, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  height: 100%;
}
</style>