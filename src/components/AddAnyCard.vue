<script setup>
import { ref, computed } from 'vue';
import { useBoardStore } from '../stores/boardChecker';
const boardStore = useBoardStore();

const availableCards = computed(() => boardStore.deck);

var selectedCard = null;
const showDropdown = ref(false);

function addCard() {
  if (cardCombination.value.length < 3) {
    cardCombination.value.push(selectedCard);
    boardStore.removeFromDeck(selectedCard);
    selectedCard = null;
    boardStore.boardCheck();
    showDropdown.value = false;
  }
}

function toggleDropdown() {
  showDropdown.value = true;
}

const props = defineProps({
  stone: {
    type: Object,
    required: true,
  },
  player: {
    type: String,
    required: true,
  }
});

const uniqueid = props.player + props.stone.id;
const cardCombination = computed(() => props.stone[props.player]);
const canAddCard = computed(() => {
  return cardCombination.value.length < 3 && props.stone.Winner === null && availableCards.value.length > 0;
});
</script>
<template>
      <div class="addCardSection">
      <button class="add-card-button" @click="toggleDropdown" v-if="!showDropdown && canAddCard">
        +
      </button>
      <div class="card-selection" v-if="showDropdown && canAddCard">
        <select v-model="selectedCard" :id="uniqueid" @change="addCard()">
          <option disabled value="">Choose a card</option>
          <option
            v-for="card in availableCards"
            :key="card"
            :value="card"
          >
            {{ card.value }} {{ card.color }}
          </option>
        </select>
      </div>
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
}

.add-card-button:hover {
  background-color: #45A049;
}
</style>