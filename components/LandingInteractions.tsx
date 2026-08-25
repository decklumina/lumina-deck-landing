"use client";

import { useEffect } from "react";

export function LandingInteractions() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const header = document.querySelector<HTMLElement>("[data-header]");
    const aurora = document.querySelector<HTMLElement>("[data-aurora]");
    const hero = document.querySelector<HTMLElement>(".hero");
    const story = document.querySelector<HTMLElement>("[data-story]");
    const storyVisual = document.querySelector<HTMLElement>(
      "[data-story-visual]",
    );
    const storyProgress = document.querySelector<HTMLElement>(
      "[data-story-progress]",
    );
    const storyCounter =
      document.querySelector<HTMLElement>("[data-step-counter]");
    const storyCopies = [
      ...document.querySelectorAll<HTMLElement>("[data-story-copy]"),
    ];
    let activeStep = -1;
    let ticking = false;

    const updateScrollEffects = () => {
      ticking = false;
      header?.classList.toggle("is-solid", window.scrollY > 40);
      if (!story || !storyVisual || window.innerWidth <= 760) return;
      const bounds = story.getBoundingClientRect();
      const available = Math.max(1, story.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / available));
      const nextStep = Math.min(3, Math.floor(progress * 4));
      storyProgress?.style.setProperty("transform", `scaleX(${progress})`);
      if (nextStep === activeStep) return;
      activeStep = nextStep;
      storyVisual.dataset.step = String(nextStep);
      if (storyCounter)
        storyCounter.textContent = String(nextStep + 1).padStart(2, "0");
      storyCopies.forEach((copy, index) =>
        copy.classList.toggle("is-active", index === nextStep),
      );
    };
    const requestScrollUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrollEffects);
    };
    const moveAurora = (event: PointerEvent) => {
      if (!hero || !aurora) return;
      const bounds = hero.getBoundingClientRect();
      aurora.style.setProperty("--x", `${event.clientX - bounds.left}px`);
      aurora.style.setProperty("--y", `${event.clientY - bounds.top}px`);
    };

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    if (hero && aurora && !coarsePointer && !reducedMotion)
      hero.addEventListener("pointermove", moveAurora);
    updateScrollEffects();

    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    let observer: IntersectionObserver | undefined;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.14 },
      );
      reveals.forEach((element) => observer?.observe(element));
    }

    return () => {
      document.documentElement.classList.remove("js");
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      hero?.removeEventListener("pointermove", moveAurora);
      observer?.disconnect();
    };
  }, []);

  return null;
}
