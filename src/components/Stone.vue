<script setup>
import { getStoneImage } from '../utilities/assetUtilities';

const props = defineProps({
  stoneId: {
    type: Number,
    required: true,
  },
  isHidden: {
    type: Boolean,
    default: false,
  }
});
</script>
<template>
    <div class="stoneImage" :class="{ hidden: isHidden }" :style="{ backgroundImage: `url(${ getStoneImage(props.stoneId) })` }"></div>
</template>
<style scoped>
div.stoneImage {
  height: 15vh;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
}
div.stoneImage.hidden {
  visibility: hidden;
}
</style>