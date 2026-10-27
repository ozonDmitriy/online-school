<script setup lang="ts">
const emit = defineEmits<{
  (e: "update:period", value: "month" | "half" | "year"): void;
  (e: "update:grade", value: string): void;
}>();

const changePeriod = (e: Event) => {
  emit("update:period", (e.target as HTMLInputElement).value as any);
};
const changeGrade = (e: Event) => {
  emit("update:grade", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <div class="programm">
    <p class="programm__title">Выберите удобный тариф обучения</p>
    <div class="programm_flex">
      <div class="programm__grade-select">
        <input
          type="radio"
          name="grade"
          id="g1"
          value="1"
          @change="changeGrade"
        />
        <label for="g1">1</label>

        <input
          type="radio"
          name="grade"
          id="g2"
          value="2-4"
          @change="changeGrade"
        />
        <label for="g2">2-4</label>

        <input
          type="radio"
          name="grade"
          id="g3"
          value="4-6"
          @change="changeGrade"
        />
        <label for="g3">4-6</label>

        <input
          type="radio"
          name="grade"
          id="g4"
          value="6-8"
          @change="changeGrade"
        />
        <label for="g4">6-8</label>

        <input
          type="radio"
          name="grade"
          id="g5"
          value="9"
          @change="changeGrade"
        />
        <label for="g5">9</label>

        <input
          type="radio"
          name="grade"
          id="g6"
          value="10-11"
          @change="changeGrade"
        />
        <label for="g6">10-11</label>
      </div>
      <div class="programm__period-switch">
        <input
          name="period"
          id="m"
          type="radio"
          value="month"
          @change="changePeriod"
        />
        <label for="m">Месяц</label>

        <input
          name="period"
          id="h"
          type="radio"
          value="half"
          @change="changePeriod"
        />
        <label for="h">Полгода</label>

        <input
          name="period"
          id="y"
          type="radio"
          value="year"
          @change="changePeriod"
        />
        <label for="y">Год</label>
      </div>
    </div>
  </div>
</template>
<style src="./styleProgramm.scss" lang="scss"></style>
