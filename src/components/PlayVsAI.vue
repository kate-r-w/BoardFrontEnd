<script setup>
import Board from './Board.vue';
import Hand from './Hand.vue';
import { onMounted } from 'vue';
import { usePlayGameStore } from '../stores/playGame';
import { ref } from 'vue';
import AddCardFromHand from './AddCardFromHand.vue';
import GameOver from './GameOver.vue';

const gameStore = usePlayGameStore();
onMounted(() => {
  gameStore.deal();
});

const stones = ref(gameStore.stones);
const hand = ref(gameStore.playerTwoHand);
</script>

<template>
  <div>
    <div id="play-vs-ai" :class="{ locked: gameStore.locked}">
      <Board :stones="stones">
        <template #addcard="{ stone, player }">
          <AddCardFromHand v-if="player == `playerTwo`" :stone="stone" :player="player"></AddCardFromHand>
        </template>
      </Board>
    </div>
    <div :class="{ locked: gameStore.locked}"><Hand :hand="hand"></Hand></div>
    <GameOver v-if="gameStore.gameOver"></GameOver>
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
div.locked {
  pointer-events: none;
  opacity: 0.5;
}
</style>