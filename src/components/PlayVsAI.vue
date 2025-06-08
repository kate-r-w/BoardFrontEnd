<script setup>
import Board from './Board.vue';
import { onMounted } from 'vue';
import { usePlayGameStore } from '../stores/playGame';
import { ref } from 'vue';

const gameStore = usePlayGameStore();
onMounted(() => {
  gameStore.getDeck();
});

const stones = ref(gameStore.stones);
</script>
<template>
  <div class="play-vs-ai">
    <Board :stones="stones"/>
    <div>hand goes here</div>
  </div>
</template>

<style scoped>
</style>