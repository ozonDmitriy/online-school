<script setup lang="ts">
import AddReview from "./AddReview.vue";
import PhoneMockup from "./PhoneMockup.vue";
import { reviews } from "@/data/reviews";
</script>
<template>
  <div class="testimonials" id="reviews">
    <div class="testimonials__container">
      <div class="testimonials__content">
        <h2 class="testimonials__title">Нам доверяют</h2>
        <p class="testimonials__description">
          Уже сотни школьников сдали ЕГЭ и ОГЭ на высокие баллы благодаря нашим
          преподавателям
        </p>
        <AddReview />
      </div>

      <div class="testimonials__visual">
        <img class="testimonials__guy" src="/icons/guy.png" alt="guy" />
        <PhoneMockup :reviews="reviews" />
      </div>
    </div>
  </div>
</template>
<style src="./styleReview.scss" lang="scss"></style>
