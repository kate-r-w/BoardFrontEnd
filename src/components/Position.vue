<script setup>
import { ref, computed } from 'vue';
import { useBoardStore } from '../stores/board';

const boardStore = useBoardStore();

const availableCards = computed(() => boardStore.deck);

var selectedCard = null;

// Function to add a card to the combination
function addCard() {
  if (cardCombination.value.length < 3) {
    // Add the card to the combination
    cardCombination.value.push(selectedCard);

    // Remove the card from the deck
    boardStore.removeFromDeck(selectedCard);

    // Reset the selected card
    selectedCard = null;

    //check board
    boardStore.boardCheck();
  }
}

const props = defineProps({
  stoneId: {
    type: Number,
    required: true
  },
  player: {
    type: String,
    required: true
  }
})

const uniqueid = props.player + props.stoneId;
const cardCombination = ref(boardStore.getCardCombination(props.stoneId, props.player));
</script>
<template>
  <td class="position">
    <div class="card-selection" v-if="cardCombination.length < 3">
      <label :for="uniqueid">Select Card:</label>
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

    <!-- Display selected cards -->
    <div class="selected-cards">
      <ul>
        <li
          v-for="(card, index) in cardCombination"
          :key="index"
          :style="{ color: card.color, borderColor: card.color }"
          class="card-item"
        >
          {{ card.value }}
        </li>
      </ul>
    </div>
  </td>
</template>

<style scoped>
.card-selection {
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.selected-cards {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.card-item {
  font-weight: bold;
  border: 2px solid;
  padding: 10px;
  margin: 5px 0;
  text-align: center;
  border-radius: 5px;
}
</style>