import gsap from "gsap";
import SplitType from "split-type";
import { textFadeIn } from "./introAnim";

export default function q2anim() {
  const titleWords = new SplitType("#q2title", { types: "words" }).words;
  return gsap
    .timeline()
    .set("#q2body", {
      x: -100,
      opacity: 0,
    })
    .set("#teacher, #blackboard", {
      opacity: 0,
      x: -100,
    })
    .to("#q1", { opacity: 0, duration: 4 })
    .to("#q2", { opacity: 1, duration: 4 })
    .to(
      "#teacher, #blackboard",
      {
        x: 0,
        opacity: 1,
        duration: 10,
        stagger: 2,
      },
      ">"
    )
    .add(textFadeIn(titleWords, 10))
    .to(
      "#q2body",
      {
        x: 0,
        opacity: 1,
        duration: 12,
      },
      ">+=2"
    );
}
