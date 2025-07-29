<script setup>
import { usePlayGameStore } from '../stores/playGame';
import { ref } from 'vue';

const gameStore = usePlayGameStore();

const errorMessage = ref(gameStore.errorMessage);
const isPlayCard = ref(gameStore.errorType == `duringPlayCard`);
function retryPlay() {
  gameStore.errorMessage = null;
  gameStore.locked = false;
  gameStore.playCard();
}
function restartGame() {
  gameStore.deal();
  gameStore.errorMessage = null;
  gameStore.locked = false;
}
</script>

<template>
  <div class="error-overlay">
    <div class="error-content">
      <p>API Error</p>
      <p>{{ errorMessage }}</p>
      <button v-if="isPlayCard" @click="retryPlay">retry play</button>
      <button @click="restartGame">restart</button>
    </div>
  </div>
</template>

<style scoped>
.error-overlay {
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

.error-content {
  background-color: #FCF5E5;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 3px solid #422e08;
}

.game-over-content p {
  font-size: 1.2em;
  color: #422e08;
}
</style>