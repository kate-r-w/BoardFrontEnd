<script setup>
import { ref } from 'vue';
// Reactive property to store selected numbers
const cardCombination = ref([]);

// Reactive properties for the current card selection
const selectedNumber = ref(null);
const selectedColor = ref(null);

// Function to add a card to the combination
function addCard() {
  if (selectedNumber.value && selectedColor.value && cardCombination.value.length < 3) {
    // Create a card object and add it to the combination
    cardCombination.value.push({
      number: selectedNumber.value,
      color: selectedColor.value,
    });

    // Reset the current selection
    selectedNumber.value = null;
    selectedColor.value = null;
  }
}

defineProps({
})
</script>
<template>
  <td class="position">
    <div class="card-selection">
      <label for="number">Select Number:</label>
      <select id="number" v-model="selectedNumber">
        <option disabled value="">Choose a number</option>
        <option v-for="number in 9" :key="number" :value="number">
          {{ number }}
        </option>
      </select>

      <label for="color">Select Color:</label>
      <select id="color" v-model="selectedColor">
        <option disabled value="">Choose a color</option>
        <option v-for="color in ['blue', 'green', 'red', 'purple', 'brown', 'yellow']" :key="color" :value="color">
          {{ color }}
        </option>
      </select>

      <button @click="addCard" :disabled="!selectedNumber || !selectedColor">
        Add Card
      </button>
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
          {{ card.number }}
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