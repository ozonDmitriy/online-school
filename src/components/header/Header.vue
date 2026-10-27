<script setup lang="ts"></script>
<template>
  <div class="header">
    <div class="header__logo">
      <img src="/icons/logo.png" alt="Логотип" width="100" height="100" />
      <p>EDURUSH</p>
    </div>
    <nav>
      <ul class="header__menu">
        <li><a class="header__menu-about-school" href="#">О школе</a></li>
        <li><a class="header__menu-courses" href="#">Курсы</a></li>
        <li><a class="header__menu-license" href="#reviews">Отзывы</a></li>
        <li><a class="header__menu-contact" href="#contacts">Контакты</a></li>
      </ul>
    </nav>
    <img
      class="header__user-logo"
      src="/icons/user.svg"
      alt="Профиль"
      width="30"
      height="30"
    />
  </div>
</template>
<style src="./styleHeader.scss" scoped lang="scss"></style>
