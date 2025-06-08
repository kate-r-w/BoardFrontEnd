<script setup>
import Position from './Position.vue';
import Stone from './Stone.vue';
import AddAnyCard from './AddAnyCard.vue';

defineProps({
  stones: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div v-for="stone in stones" class="stone" :key="stone.id">
    <Position :key="stone.id" :stoneId="stone.id" player="PlayerOne" :stone="stone">
        <template #addanycard>
            <AddAnyCard :stoneId="stone.id" player="PlayerOne"></AddAnyCard>
        </template>
    </Position>
    <Stone :isHidden="stone.Winner != null" :stoneId="stone.id" />
    <Position :key="stone.id" :stoneId="stone.id" player="PlayerTwo" :stone="stone">
        <template #addanycard>
            <AddAnyCard :stoneId="stone.id" player="PlayerTwo"></AddAnyCard>
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
