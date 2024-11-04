import gsap from "gsap";
import SplitType from "split-type";

export default function introAnim() {
  const chars = new SplitType("#intro .header", { types: "chars" }).chars;
  gsap.set("#intro", { autoAlpha: 1 });
  gsap.set(chars, { yPercent: 100, opacity: 0 });
  return gsap.timeline().to(chars, {
    yPercent: 0,
    opacity: 1,
    ease: "sine.out",
    stagger: 0.1,
    duration: 2,
  });
}

export function textFadeIn(selector, duration) {
  gsap.set(selector, { yPercent: 100, opacity: 0 });
  return gsap.timeline().to(selector, {
    yPercent: 0,
    opacity: 1,
    ease: "sine.out",
    stagger: 0.5,
    duration: duration ?? 2,
  });
}
