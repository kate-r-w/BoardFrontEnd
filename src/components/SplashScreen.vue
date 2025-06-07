<template>
  <div class="splash-screen">
    <h1>Nine Fronts</h1>
    <div class="stone-images">
      <img v-for="index in 9" :key="index" :src="getStoneImage(index - 1)" alt="Stone" />
    </div>
    <div class="options">
      <button @click="navigateTo('/board-checker')">Board Checker</button>
      <button @click="navigateTo('/play-vs-ai')">Play vs AI</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateTo(path) {
  router.push(path);
}

function getStoneImage(stoneIndex) {
  return new URL(`../assets/images/stone${stoneIndex + 1}.png`, import.meta.url).href;
}
</script>

<style scoped>
.splash-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 2px solid #422e08;
  padding-bottom: 0.5rem;
}

.stone-images {
  display: flex;
  justify-content: center;
  margin-top: -2em;
}

.stone-images img {
  width: 40px;
  height: auto;
  margin: 0 5px;
}

.options button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  color: #422e08;
  font-weight: bold;
  background-color: #ead4ac;
  border: 3px solid #422e08;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
}

.options button:hover {
    background-color: #f5f0e6;
}
</style>