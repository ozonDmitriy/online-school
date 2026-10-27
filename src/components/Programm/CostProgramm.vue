<script setup lang="ts">
defineProps<{
  period: string;
  grade: string;
  price: number;
  periodLabel: string;

  title: string;
  features: string[];
  format: string;
  highlight?: boolean;
}>();
</script>

<template>
  <div class="container1">
    <div class="cost" :class="{ 'cost--highlight': highlight }">
      <div class="cost__header">
        <p class="cost__title">{{ title }}</p>

        <div class="cost__badges">
          <div class="cost__grade">
            <p class="cost__grade-text">{{ grade }}</p>
          </div>

          <div class="cost__format">
            <p class="cost__format-text">{{ format }}</p>
          </div>
        </div>
      </div>

      <ul class="cost__list">
        <li v-for="(item, i) in features" :key="i" class="cost__item">
          <img class="cost__icon" src="/icons/circle.png" />
          <span class="cost__text">{{ item }}</span>
        </li>
      </ul>

      <div class="cost__footer">
        <div class="cost__price">
          <p class="cost__amount">{{ price }}</p>
          <p class="cost__period">за {{ periodLabel }}</p>
        </div>

        <p class="cost__vat">Включая НДС</p>
      </div>
    </div>
  </div>
</template>

<style src="./styleCost.scss" lang="scss"></style>
