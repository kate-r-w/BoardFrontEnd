<script setup>
import { ref, computed } from 'vue';
import { usePlayGameStore } from '../stores/playGame';
const playGameStore = usePlayGameStore();

function addCard() {
  if (canAddCard) {
    cardCombination.value.push(playGameStore.selectedCard);
    playGameStore.removeCardFromHand(playGameStore.selectedCard);
    playGameStore.selectedCard = null;
    playGameStore.playCard();
  }
}

const props = defineProps({
  stone: {
    type: Object,
    required: true,
  }
});

const cardCombination = computed(() => props.stone["playerTwo"]);
const canAddCard = computed(() => {
  return cardCombination.value.length < 3 && props.stone.winner == null && playGameStore.selectedCard != null;
});
</script>
<template>
<div class="addCardSection">
  <button class="add-card-button" v-if="canAddCard" @click="addCard()">
    +
  </button>
</div>
</template>
<style scoped>
.add-card-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

div.addCardSection {
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-card-button:hover {
  background-color: #45A049;
}
</style>