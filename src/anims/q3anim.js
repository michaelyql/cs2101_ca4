import gsap from "gsap";
import SplitType from "split-type";
import { textFadeIn } from "./introAnim";

export default function q3anim() {
  const words = new SplitType("#q3title", { types: "words" }).words;
  return gsap
    .timeline()
    .set("#speaker, #podium, #q3body", { opacity: 0, x: 100 })
    .set("#seal", { opacity: 0, x: -200 })
    .set("#q3body", { opacity: 0, y: 200 })
    .to("#q2", { opacity: 0, duration: 2 })
    .to("#q3", { opacity: 1, duration: 2 }, ">")
    .to(
      "#speaker, #podium, #seal",
      { opacity: 1, x: 0, duration: 10, stagger: 0.4, ease: "power1.inOut" },
      ">"
    )
    .add(textFadeIn(words, 10))
    .to(
      "#q3body",
      {
        opacity: 1,
        y: 0,
        duration: 8,
      },
      ">"
    );
}
