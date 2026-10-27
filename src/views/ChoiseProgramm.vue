<script setup lang="ts">
import { ref, computed } from "vue";

import Programm from "@/components/buyProgramm/Programm.vue";
import CostProgramm from "@/components/Programm/CostProgramm.vue";

const period = ref<"month" | "half" | "year">("month");
const grade = ref<string>("1");

const priceMap = {
  month: 7500,
  half: 35000,
  year: 68000,
};

const periodLabels = {
  month: "месяц",
  half: "полгода",
  year: "год",
};

const price = computed(() => priceMap[period.value]);

// 👇 ТАРИФЫ
const tariffs = computed(() => [
  {
    type: "basic",
    title: "Заочный формат обучения",
    format: "вебинары",
    features: [
      "график утро / вечер",
      "вебинары в больших группах",
      "автоматическая проверка заданий",
      "самообучение с поддержкой",
    ],
    highlight: false,
  },
  {
    type: "internet",
    title: "Интернет тариф",
    format: "видео",
    features: [
      "доступ к видеоурокам 24/7",
      "обучающие материалы и конспекты",
      "задания с автопроверкой",
      "обучение в своём темпе",
      "без вебинаров",
    ],
    highlight: false,
  },
  {
    type: "pro",
    title: "Про Макс тариф",
    format: "PRO",
    features: [
      "всё из интернет тарифа",
      "персональный куратор",
      "живые консультации",
      "приоритетная проверка заданий",
      "закрытые вебинары",
      "расширенные материалы",
    ],
    highlight: true,
  },
]);
</script>

<template>
  <Programm v-model:period="period" v-model:grade="grade" />

  <div class="tariffs">
    <CostProgramm
      v-for="(t, i) in tariffs"
      :key="i"
      :period="period"
      :price="price"
      :grade="grade"
      :period-label="periodLabels[period]"
      :title="t.title"
      :features="t.features"
      :format="t.format"
      :highlight="t.highlight"
    />
  </div>
</template>

<style src="/src/components/Programm/styleCost.scss" lang="scss"></style>
