// composables/useAutoScroll.ts
import { ref, onMounted, onBeforeUnmount, type Ref } from "vue";

export function useAutoScroll(speed = 0.3) {
  const elRef: Ref<HTMLElement | null> = ref(null);

  let pos = 0;
  let rafId: number | null = null;
  let halfHeight = 0;

  const step = () => {
    if (!elRef.value) return;

    pos += speed;

    if (halfHeight > 0) {
      pos = pos % halfHeight;
    }

    elRef.value.style.transform = `translateY(-${pos}px)`;

    rafId = requestAnimationFrame(step);
  };

  onMounted(() => {
    if (elRef.value) {
      halfHeight = elRef.value.scrollHeight / 2;
    }

    rafId = requestAnimationFrame(step);
  });

  onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId);
  });

  return { elRef };
}
