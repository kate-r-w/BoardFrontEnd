<template>
  <div class="splash-screen">
    <div class="header"><h1>Nine Fronts</h1></div>
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
import { getStoneImage } from '../utilities/assetUtilities';

const router = useRouter();

function navigateTo(path) {
  router.push(path);
}
</script>

<style scoped>
div.splash-screen {
  display: grid;
  grid-template-areas:
    "headline"
    "stones"
    "buttons";
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
}

div.header {
  grid-area: "headline";
}
div.header h1 {
  display: inline-block;
  font-size: 4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 2px solid #422e08;
  text-align: center;
  padding-bottom: 0.5rem;
  margin: 0 0 0.5rem 0;
}

div.stone-images {
  grid-area: "stones";
  text-align: center;
  margin: 0px;
}
div.stone-images img {
  width: 40px;
  height: auto;
  margin: 0 5px;
}

div.options button {
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
div.options button:hover {
  background-color: #f5f0e6;
}
</style>