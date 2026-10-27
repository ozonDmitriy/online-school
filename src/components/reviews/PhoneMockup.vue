<script setup lang="ts">
import { computed } from "vue";
import { useAutoScroll } from "@/composables/useAutoScrollReview.ts";
import ReviewCard from "./ReviewCard.vue";
import type { Review } from "@/data/reviews";

const props = defineProps<{
  reviews: Review[];
}>();

const duplicated = computed<Review[]>(() =>
  props.reviews.concat(props.reviews),
);

const { elRef } = useAutoScroll(0.2);
</script>
<template>
  <div class="phone">
    <img src="/icons/iphone_half_empty_reviews.png" class="frame" width="700" />

    <div class="phone__screen">
      <div class="phone__reviews" ref="elRef">
        <ReviewCard
          v-for="r in duplicated"
          :key="r.id"
          :name="r.name"
          :text="r.text"
        />
      </div>
    </div>
  </div>
</template>
<style src="./styleReview.scss" lang="scss"></style>
