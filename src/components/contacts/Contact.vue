<script setup>
const year = new Date().getFullYear();
</script>
<template>
  <footer class="footer" id="contacts">
    <div class="footer__top-line"></div>

    <div class="footer__container">
      <div class="footer__brand">
        <h2 class="footer__logo">EDURUSH</h2>
        <p class="footer__description">
          EDURUSH — онлайн-школа будущего, где знания превращаются в навыки, а
          навыки — в карьеру. Практика вместо воды, результат вместо теории.
        </p>
      </div>

      <div class="footer__column">
        <h3 class="footer__title">Контакты</h3>
        <ul class="footer__list">
          <li class="footer__item">📩 edurush@.gmail.com</li>
          <li class="footer__item">📞 +7(000) 000-00-00</li>
          <li class="footer__item">📍 Russia / Россия</li>
        </ul>
      </div>

      <div class="footer__column">
        <h3 class="footer__title">Навигация</h3>
        <ul class="footer__list">
          <li class="footer__item">Курсы</li>
          <li class="footer__item">Программы</li>
          <li class="footer__item">Преподаватели</li>
          <li class="footer__item">О школе</li>
        </ul>
      </div>

      <div class="footer__column">
        <h3 class="footer__title">Соцсети</h3>

        <div class="footer__socials">
          <a class="footer__link" href="#">Telegram</a>
          <a class="footer__link" href="#">YouTube</a>
          <a class="footer__link" href="#">Instagram</a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__divider"></div>
      <p class="footer__copyright">
        © {{ year }} EDURUSH. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style src="./styleContact.scss" lang="scss"></style>
