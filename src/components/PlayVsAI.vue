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
  <div id="play-vs-ai">
    <Board :stones="stones"/>
  </div>
</template>

<style scoped>
div#play-vs-ai {
  margin: auto;
  border-collapse: separate;
  height: 97vh;
  width: 97vw;
  display: flex;
}
</style>