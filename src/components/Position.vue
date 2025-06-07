<script setup>
import CardCombination from './CardCombination.vue';
import Stone from './Stone.vue';
import AddAnyCard from './AddAnyCard.vue';
import { ref, computed } from 'vue';
import { useBoardStore } from '../stores/board';

const boardStore = useBoardStore();

const props = defineProps({
  stoneId: {
    type: Number,
    required: true,
  },
  player: {
    type: String,
    required: true,
  }
});

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
    <AddAnyCard :stoneId="props.stoneId" :player="props.player" />
    <CardCombination :cardCombination="cardCombination" />
    <Stone :isHidden="!isWinner" :stoneId="props.stoneId" />
  </div>
</template>

<style scoped>
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
</style>