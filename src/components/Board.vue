<script setup>
import AddCardFromHand from './AddCardFromHand.vue';
import Position from './Position.vue';
import Stone from './Stone.vue';

defineProps({
  stones: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <template v-for="stone in stones" :key="stone.id">
    <Position :stoneId="stone.id" player="playerOne" :stone="stone">
    </Position>
  </template>
  <template v-for="stone in stones">
    <Stone :isHidden="stone.winner != null" :stoneId="stone.id" />
  </template>
  <template v-for="stone in stones" :key="stone.id">
    <AddCardFromHand :stone="stone" player="playerTwo"></AddCardFromHand>
  </template>
  <template v-for="stone in stones">
    <Position :stoneId="stone.id" player="playerTwo" :stone="stone">
    </Position>
  </template>
</template>

<style scoped>
</style>