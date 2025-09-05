<script setup>
import CardCombination from './CardCombination.vue';
import Stone from './Stone.vue';
import { computed } from 'vue';

const props = defineProps({
  stoneId: {
    type: Number,
    required: true,
  },
  player: {
    type: String,
    required: true,
  },
  stone: {
    type: Object,
    required: true,
  },
});

const stone = props.stone;
//player casing is wrong on ai
const cardCombination = stone[props.player];
const isWinner = computed(() => {
  //todo: standardize these naming conventions
  var me = props.player === 'playerOne' ? 'One' : 'Two';
  return stone.winner === me;
  });
</script>

<template>
  <div class="position" :class="props.player">
    <slot name="addcard" :stone="props.stone" :player="props.player"></slot>
    <CardCombination :cardCombination="cardCombination" />
    <Stone :isHidden="!isWinner" :stoneId="props.stoneId" />
  </div>
</template>

<style scoped>
div.position {
  display: grid;
  grid-template-columns: auto;
  width: 100%;
}

div.position.playerOne {
}
</style>