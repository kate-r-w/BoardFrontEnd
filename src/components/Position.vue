<script setup>
import { ref, computed } from 'vue';
import { useBoardStore } from '../stores/board';

const boardStore = useBoardStore();

const availableCards = computed(() => boardStore.deck);

var selectedCard = null;

// Add a card to the combination
function addCard() {
  if (cardCombination.value.length < 3) {
    cardCombination.value.push(selectedCard);
    boardStore.removeFromDeck(selectedCard);
    selectedCard = null;
    boardStore.boardCheck();
  }
}

const props = defineProps({
  stoneId: {
    type: Number,
    required: true,
  },
  player: {
    type: String,
    required: true,
  },
});

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
          :class="card.color"
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

.card-item.Yellow{
  color: #FFD700;
  border-color: #FFD700;
}

.card-item.Brown {
  color: #8B4513;
  border-color: #8B4513;
}

.card-item.Blue {
  color: #1E90FF;
  border-color: #1E90FF;
}

.card-item.Purple {
  color: #9370DB;
  border-color: #9370DB;
}

.card-item.Red {
  color: #FF4500;
  border-color: #FF4500;
}

.card-item.Green {
  color: #32CD32;
  border-color: #32CD32;
}
</style>