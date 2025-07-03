<script setup>
import { usePlayGameStore } from '../stores/playGame';
import { ref } from 'vue';

const gameStore = usePlayGameStore();

const winner = ref(gameStore.winner);
function close() {
  gameStore.gameOver = false;
}
</script>

<template>
  <div class="game-over-overlay">
    <div class="game-over-content">
      <h1 v-if="winner == `Two`">You win!</h1>
      <h1 v-if="winner == `One`">You lose!</h1>
      <p>Game over.</p>
      <button @click="gameStore.deal">restart</button>
      <button @click="close">view board</button>
    </div>
  </div>
</template>

<style scoped>
.game-over-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.game-over-content {
  background-color: #FCF5E5;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 3px solid #422e08;
}

.game-over-content h1 {
  font-size: 2.5em;
  color: #422e08;
  margin-bottom: 10px;
}

.game-over-content p {
  font-size: 1.2em;
  color: #422e08;
}
</style>