import gsap from "gsap";
import SplitType from "split-type";
import { textFadeIn } from "./introAnim";

export default function q5anim() {
  const text = new SplitType("#q5body", { types: "words" }).words;
  return gsap
    .timeline()
    .set("#reviews, #code", { opacity: 0, x: -20 })
    .to("#q4", { opacity: 0, duration: 2 })
    .to("#q5", { opacity: 1, duration: 2 }, ">")
    .to("#reviews, #code", { opacity: 1, x: 0, stagger: 3, duration: 10 }, ">")
    .add(textFadeIn(text, 15));
}
