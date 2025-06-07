<script setup>
const props = defineProps({
  cardCombination: {
    type: Array,
    required: true,
  },
});
</script>
<template>
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
</template>
<style scoped>
div.selected-cards {
  width: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}

.card-item {
  font-weight: bold;
  border: 2px solid;
  padding: 5px 10px;
  text-align: right;
  border-radius: 5px;
  margin: -7px 10px 0px 10px;
  background-color: #FCF5E5;
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
</style>