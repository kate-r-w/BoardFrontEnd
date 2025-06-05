<script setup>
import { ref, computed } from 'vue';
import { useBoardStore } from '../stores/board';

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
  stoneId: {
    type: Number,
    required: true,
  },
  player: {
    type: String,
    required: true,
  },
  stoneImage: {
    type: String,
    required: true,
  },

});

const uniqueid = props.player + props.stoneId;
const cardCombination = ref(boardStore.getCardCombination(props.stoneId, props.player));
const stone = ref(boardStore.getStone(props.stoneId));
const isWinner = computed(() => {
  //todo: standardize these naming conventions
  var me = props.player === 'PlayerOne' ? 'One' : 'Two';
  return stone.value.Winner === me;
  });
</script>

<template>
  <div class="position" :class="props.player">
    <div class="addCardSection">
      <button class="add-card-button" @click="toggleDropdown" v-if="!showDropdown && cardCombination.length < 3">
        +
      </button>
      <div class="card-selection" v-if="showDropdown && cardCombination.length < 3">
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
    <div class="wonStone" v-if="isWinner" :style="{ backgroundImage: `url(${ props.stoneImage })` }"></div>
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

div.position {
  height: 40vh;
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
}

div.position.PlayerOne {
  flex-direction: column-reverse;
}

div.selected-cards {
  width: 100%;
}

div.addCardSection {
  height: 37px;
}

.add-card-button:hover {
  background-color: #45A049;
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

.card-item.Yellow {
  color: #FFC300;
  border-color: #FFC300;
}

.card-item.Brown {
  color: #8B4513;
  border-color: #8B4513;
}

.card-item.Blue {
  color: #0074D9;
  border-color: #0074D9;
}

.card-item.Purple {
  color: #6A0DAD;
  border-color: #6A0DAD;
}

.card-item.Red {
  color: #C70039;
  border-color: #C70039;
}

.card-item.Green {
  color: #2ECC71;
  border-color: #2ECC71;
}

div.wonStone {
  height: 15vh;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
}
</style>