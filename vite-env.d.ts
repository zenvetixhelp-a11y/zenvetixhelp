import { useEffect, useRef, RefObject } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; once?: boolean } = {}
): RefObject<T> {
  const { threshold = 0.12, once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('visible');
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}

export function useStaggerReveal(
  parentRef: RefObject<HTMLElement>,
  selector: string,
  stagger = 90
) {
  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;
    const children = Array.from(parent.querySelectorAll<HTMLElement>(selector));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      children.forEach((el) => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * stagger)
          );
          observer.unobserve(parent);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(parent);
    return () => observer.disconnect();
  }, [parentRef, selector, stagger]);
}
