<script setup>
import Board from './Board.vue';
import Hand from './Hand.vue';
import { onMounted } from 'vue';
import { usePlayGameStore } from '../stores/playGame';
import { ref } from 'vue';
import AddCardFromHand from './AddCardFromHand.vue';
import GameOver from './GameOver.vue';
import ErrorModal from './ErrorModal.vue';

const gameStore = usePlayGameStore();
onMounted(() => {
  gameStore.deal();
});

const stones = ref(gameStore.stones);
const hand = ref(gameStore.playerTwoHand);
const aiHand = ref(gameStore.playerOneHand);
</script>

<template>
  <div id="play-vs-ai" :class="{ locked: gameStore.locked}">
    <Board :stones="stones">
      <template #addcard="{ stone, player }">
        <AddCardFromHand v-if="player == `playerTwo`" :stone="stone" :player="player"></AddCardFromHand>
      </template>
    </Board>
    <div :class="{ locked: gameStore.locked}" class="playerHand"><Hand :hand="hand"></Hand></div>
  </div>
  <GameOver v-if="gameStore.gameOver"></GameOver>
  <ErrorModal v-if="gameStore.errorMessage"></ErrorModal>
</template>

<style scoped>
div#play-vs-ai {
  display: grid;
  grid-template-columns:
    repeat(9, 1fr);
  grid-template-rows:
    30% 10% 10% 30% 20%;
  height: 95vh;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
div.locked {
  pointer-events: none;
  opacity: 0.5;
}
div.playerHand {
  grid-column: 1 / span 9;
  grid-row: 5 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>