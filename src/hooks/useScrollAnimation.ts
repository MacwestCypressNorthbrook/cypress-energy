"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  y?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      delay = 0,
      duration = 0.8,
      stagger = 0,
      ease = "power2.out",
      start = "top 85%",
      once = true,
    } = options;

    const ctx = gsap.context(() => {
      const targets = stagger > 0 ? el.children : el;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            once,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useCounterAnimation(target: number, start = "top 85%") {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
        onUpdate: () => {
          if (el) el.textContent = Math.round(obj.val).toString();
        },
      });
    }, el);

    return () => ctx.revert();
  }, [target, start]);

  return ref;
}
