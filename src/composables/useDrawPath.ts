import { onMounted, ref } from "vue";

export function useDrawPath() {
  const pathRef = ref<SVGPathElement | null>(null);
  const pencilRef = ref<HTMLImageElement | null>(null);

  onMounted(() => {
    const path = pathRef.value!;
    const pencil = pencilRef.value!;

    if (!path || !pencil) return;

    const length = path.getTotalLength();


    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    let progress = 0;
    const speed = 2; // регулируй скорость

    function animate() {
      progress += speed;

      if (progress > length) progress = length;


      path.style.strokeDashoffset = `${length - progress}`;


      const point = path.getPointAtLength(progress);

      pencil.style.left = `${point.x}px`;
      pencil.style.top = `${point.y}px`;

      // угол поворота
      const nextPoint = path.getPointAtLength(progress + 1);
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);

      pencil.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;

      if (progress < length) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  });

  return {
    pathRef,
    pencilRef,
  };
}
