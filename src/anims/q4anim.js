import gsap from "gsap";
import SplitType from "split-type";
import { textFadeIn } from "./introAnim";

export default function q4anim() {
  const words = new SplitType("#q4title", { types: "words" }).words;
  return gsap
    .timeline()
    .set("#videocall", { opacity: 0, y: -100 })
    .set("#q4body", { opacity: 0, x: -50 })
    .to("#q3", { opacity: 0, duration: 2 })
    .to("#q4", { opacity: 1, duration: 2 })
    .to("#videocall", { opacity: 1, y: 0, duration: 8 })
    .add(textFadeIn(words, 10))
    .to("#q4body", { x: 0, opacity: 1, duration: 8 });
}
