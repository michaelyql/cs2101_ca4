import gsap from "gsap";
import { useEffect, useRef } from "react";
import introAnim from "./anims/introAnim";
import q1anim from "./anims/q1anim";
import q2anim from "./anims/q2anim";
import q3anim from "./anims/q3anim";
import q4anim from "./anims/q4anim";
import q5anim from "./anims/q5anim";
import Intro from "./ans/intro";
import Q1ans from "./ans/q1ans";
import Q2ans from "./ans/q2ans";
import Q3ans from "./ans/q3ans";
import Q4ans from "./ans/q4ans";
import Q5ans from "./ans/q5ans";

function App() {
  const AppRef = useRef();

  useEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".animationContainer",
          scrub: 1,
          start: "top top",
          pin: true,
          end: "20000 bottom",
          snap: {
            snapTo: "labelsDirectional",
            ease: "linear",
            inertia: false,
            duration: { min: 1, max: 2 },
          },
        },
      })
      // hide all visibility
      .set("#q1", { opacity: 0 })
      .set("#q2", { opacity: 0 })
      .set("#q3", { opacity: 0 })
      .set("#q4", { opacity: 0 })
      .set("#q5", { opacity: 0 })
      // add animations and labels
      .addLabel("intro")
      .add(introAnim())
      .addLabel("q1")
      .add(q1anim())
      .addLabel("q2")
      .add(q2anim(), ">")
      .addLabel("q3")
      .add(q3anim(), ">")
      .addLabel("q4")
      .add(q4anim(), ">")
      .addLabel("q5")
      .add(q5anim(), ">")
      .addLabel("animationEnd");
    return () => {
      tl.revert();
    };
  }, []);

  return (
    <div className="App" ref={AppRef}>
      <div className="animationContainer">
        <Intro />
        <Q1ans />
        <Q2ans />
        <Q3ans />
        <Q4ans />
        <Q5ans />
      </div>
    </div>
  );
}

export default App;
