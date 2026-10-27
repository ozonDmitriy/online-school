<script setup lang="ts">
import SchoolInfo from "./components/AboutSchool/SchoolInfo.vue";
import Programm from "./components/buyProgramm/Programm.vue";
import Contact from "./components/contacts/Contact.vue";
import Edmvd from "./components/edmvd.vue";

import Header from "./components/header/Header.vue";
import InfoSchool from "./components/Information/InfoSchool.vue";
import Students from "./components/ourStudents/students.vue";
import CostProgramm from "./components/Programm/CostProgramm.vue";
import TestimonialsSection from "./components/reviews/TestimonialsSection.vue";
import ChoiseProgramm from "./views/ChoiseProgramm.vue";
</script>

<template>
  <div class="container">
    <Header></Header>
    <SchoolInfo></SchoolInfo>
    <InfoSchool />

    <!-- <Students></Students> -->
    <ChoiseProgramm />
    <TestimonialsSection />
    <Contact />
  </div>
</template>
<style src="./main.scss"></style>
