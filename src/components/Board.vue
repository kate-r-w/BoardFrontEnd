<script setup>
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
  <div v-for="stone in stones" class="stone" :key="stone.id">
    <Position :stoneId="stone.id" player="playerOne" :stone="stone">
      <template #addcard="{ stone, player }">
        <slot name="addcard" :stone="stone" :player="player"></slot>
      </template>
    </Position>
    <Stone :isHidden="stone.winner != null" :stoneId="stone.id" />
    <Position :stoneId="stone.id" player="playerTwo" :stone="stone">
      <template #addcard="{ stone, player }">
        <slot name="addcard" :stone="stone" :player="player"></slot>
      </template>
    </Position>
  </div>
</template>

<style scoped>
div.stone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 11%;
  height: 100%;
}
</style>
