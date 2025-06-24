<script setup>
import { usePlayGameStore } from '../stores/playGame';
import { computed } from 'vue';
const gameStore = usePlayGameStore();

const props = defineProps({
  hand: {
    type: Array,
    required: true,
  },
});

function selectCard(card) {
  gameStore.selectCard(card);
}

const selectedCard = computed(() => gameStore.selectedCard);
</script>
<template>
  <div id="hand">
    <div v-for="card in hand" class="card" :class="card.color, { selected: card == selectedCard }" @click="selectCard(card)">
        {{ card.value }}
    </div>
  </div>
</template>
<style scoped>
div#hand {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 16vh;
}
div.card {
  font-weight: bold;
  font-size: 2em;
  text-align: right;
  border: 2px solid;
  padding: 10px 10px;
  margin: 10px;
  text-align: right;
  border-radius: 5px;
  background-color: #FCF5E5;
  width: 120px;
  height: 100%;
}

.card.Yellow {
  color: #FFC300;
  border-color: #FFC300;
}

.card.Brown {
  color: #8B4513;
  border-color: #8B4513;
}

.card.Blue {
  color: #0074D9;
  border-color: #0074D9;
}

.card.Purple {
  color: #6A0DAD;
  border-color: #6A0DAD;
}

.card.Red {
  color: #C70039;
  border-color: #C70039;
}

.card.Green {
  color: #2ECC71;
  border-color: #2ECC71;
}

.card:hover, .card.selected {
  background-color: #F0E68C;
  cursor: pointer;
}
</style>