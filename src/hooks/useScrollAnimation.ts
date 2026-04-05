import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

export const useCountUp = (end: number, duration = 2000, startWhenVisible = false, isVisible = true) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (startWhenVisible && !isVisible) return;
    if (started.current) return;
    started.current = true;

    let start = 0;
    const startTime = performance.now();
    const step = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, startWhenVisible, isVisible]);

  return count;
};
