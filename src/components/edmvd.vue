<template>
  <div class="wrapper">
    <svg viewBox="0 0 1400 400" class="svg">
      <text
        ref="textRef"
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        class="draw-text"
      >
        EDURUSH
      </text>
    </svg>
  </div>
</template>

<
<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const textRef = ref<SVGTextElement | null>(null);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const animateOnce = (el: SVGTextElement, length: number) => {
  return new Promise<void>((resolve) => {
    let progress = 0;
    const speed = 4;

    const animate = () => {
      progress += speed;
      el.style.strokeDashoffset = `${length - progress}`;

      if (progress < length) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    };

    animate();
  });
};

onMounted(async () => {
  await nextTick();

  const el = textRef.value!;
  const length = el.getComputedTextLength();

  el.style.strokeDasharray = `${length}`;

  while (true) {

    el.style.strokeDashoffset = `${length}`;


    await animateOnce(el, length);


    await delay(500);
  }
});
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

/* ❗ ОДИН SVG СТИЛЬ */
.svg {
  width: 100%;
  height: auto;
  display: block;
}

/* ✏️ ТЕКСТ */
.draw-text {
  fill: none;
  stroke: #6d28d9;
  stroke-width: 6; /* чуть толще для большого текста */

  font-size: 180px; /* 👈 уменьшили вместо 280 */
  font-family: cursive;

  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
