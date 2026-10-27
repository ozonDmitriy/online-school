<script setup lang="ts">
defineProps<{
  name: string;
  text: string;
}>();
</script>
<template>
  <div class="review">
    <p class="review__text">{{ text }}</p>
    <span class="review__name">{{ name }}</span>
  </div>
</template>
<style src="./styleReview.scss" lang="scss"></style>
