import gsap from "gsap";
import SplitType from "split-type";
import { textFadeIn } from "./introAnim";

export default function q1anim() {
  const titleChars = new SplitType("#q1title", { types: "chars" }).chars;

  return gsap
    .timeline()
    .set(".starplus, .stardot", {
      visibility: "visible",
      opacity: 0,
      x: 0,
    })
    .set("#earth", {
      xPercent: -100,
      yPercent: 20,
    })
    .set("#q1body", {
      x: -100,
      opacity: 0,
    })
    .set("#q1fg, #q1mg, #q1bg", {
      yPercent: 50,
      opacity: 0,
    })
    .to("#intro", { opacity: 0, duration: 5, ease: "power4.out" })
    .to("#q1", { opacity: 1, duration: 5 }, ">")
    .to(
      "#q1fg, #q1mg, #q1bg",
      {
        yPercent: 0,
        opacity: 1,
        duration: 14,
        stagger: 0.3,
      },
      ">"
    )
    .to(
      "#earth",
      {
        xPercent: 20,
        yPercent: 0,
        duration: 14,
        ease: "power3.inOut",
      },
      ">"
    )
    .to(
      ".starplus, .stardot",
      {
        duration: 8,
        opacity: 1,
        x: 750,
        ease: "power3.inOut",
        stagger: {
          each: 1,
        },
      },
      "<"
    )
    .to(
      "#astronaut",
      {
        opacity: 1,
        xPercent: 0,
        duration: 16,
      },
      ">+=2"
    )
    .add(textFadeIn(titleChars, 10), ">+=3")
    .to(
      "#q1body",
      {
        x: 0,
        opacity: 1,
        duration: 16,
      },
      ">"
    );
}
