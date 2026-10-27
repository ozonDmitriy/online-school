<script setup lang="ts">
import edmvd from "../edmvd.vue";
</script>

<template>
  <section class="about-school">
    <div class="about-school__top">
      <div class="about-school__text">
        <h2 class="about-school__title">О школе «EDURUSH»</h2>

        <p class="about-school__description">
          Школа EDURUSH — это центр качественного образования для тех, кто
          стремится уверенно достигать своих академических целей. Здесь ученики
          не просто готовятся к экзаменам, а системно прокачивают знания, учатся
          эффективно работать с информацией и выстраивать собственную стратегию
          обучения.
        </p>

        <p class="about-school__description">
          В EDURUSH мы специализируемся на репетиторстве и подготовке к
          экзаменам. Индивидуальный подход, гибкие форматы занятий и фокус на
          результат помогают ученикам уверенно повышать уровень знаний и успешно
          сдавать экзамены.
        </p>
      </div>

      <div class="about-school__video">
        <iframe
          src="https://www.youtube.com/embed/CdAtDChxNyg"
          title="EDURUSH"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="about-school__gallery">
      <img src="/icons/matematika.jpeg" />
      <img src="/icons/schoolBoy.jpeg" />
      <img src="/icons/schoolGirl.jpeg" />
    </div>
  </section>

  <!-- 🔥 ОБЕРТКА -->
  <div class="about-school__stats-wrapper">
    <!-- ✏️ АНИМАЦИЯ НА ВСЕ БЛОКИ -->
    <edmvd class="stats-draw-bg" />

    <!-- 📊 КАРТОЧКИ -->
    <div class="about-school__stats">
      <div class="about-school__stat">
        <div class="about-school__num">800+</div>
        <div class="about-school__text">Учеников обучаются ежегодно</div>
      </div>

      <div class="about-school__stat">
        <div class="about-school__num">&gt;1000</div>
        <div class="about-school__text">
          Выпускников поступили в топовые ВУЗы
        </div>
      </div>

      <div class="about-school__stat">
        <div class="about-school__num">70</div>
        <div class="about-school__text">Золотых медалей с 2020 года</div>
      </div>

      <div class="about-school__stat">
        <div class="about-school__num">19</div>
        <div class="about-school__text">Стобалльников за 20–25 учебный год</div>
      </div>

      <div class="about-school__stat">
        <div class="about-school__num">&gt;59</div>
        <div class="about-school__text">Офферов из Russell Group</div>
      </div>

      <div class="about-school__stat">
        <div class="about-school__num">90%</div>
        <div class="about-school__text">
          Сдали ОГЭ 2025 по английскому на «5»
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./styleInfo.scss" lang="scss"></style>
