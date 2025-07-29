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
    <div class="stoneImage" :class="{ hidden: isHidden }" :style="{ backgroundImage: `url(${ getStoneImage(props.stoneId) })` }">test</div>
</template>
<style scoped>
div.stoneImage {
  height: 120px;
  width: 100%;
  border: 1px solid #422e08;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
}
div.stoneImage.hidden {
  visibility: hidden;
}
</style>