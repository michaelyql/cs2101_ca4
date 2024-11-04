import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Astronaut from "../images/astronaut.png";
import Background from "../images/Background.png";
import Earth from "../images/earth.png";
import Foreground from "../images/Foreground.png";
import Midground from "../images/Midground.png";
import StarDot from "../images/star_dot.png";
import StarPlus from "../images/star_plus.png";

export default function Q1ans() {
  // star blinking animation
  useGSAP(() => {
    gsap.to(".starplus, .stardot", {
      opacity: 0,
      duration: 1,
      stagger: {
        yoyo: true,
        each: 0.2,
        repeat: -1,
      },
    });
    gsap.set(".starplus, .stardot", {
      visibility: "hidden",
    });
    gsap.set("#astronaut", {
      opacity: 0,
      xPercent: -100,
    });
  });

  return (
    <section id="q1">
      <div id="q1title">
        What are your thoughts about the <br /> pervasiveness of communication?
      </div>
      <div id="q1body">
        Communication is all around us &#8212; it is ingrained in our everyday
        lives.
        <br />
        <br />
        From group projects to speaking with friends and family, talking to
        coworkers and bosses, everyone has to communicate in one way or another.
        <br />
        <br />
        Ever since the day we were born, we have been learning different ways to
        communicate, whether we realise it or not. When we were babies, we cried
        to get our parent's attention. Now, in the workplace, we learn how to
        write proper documentation to convey our thoughts to those who will
        succeed us.
        <br />
        <br />
        Communication represents the one of the most basic needs of any human
        being &#8212; <span className="accent">to be heard</span>. It is the
        uniting factor that makes us distinctly human: the ability to articulate
        exactly what you want, using an infinite number of mediums.
      </div>
      <path
        id="earthpath"
        d="M-89 423.5C-6.16666 285.667 264.1 8.29997 682.5 1.49997C1205.5 -7.00003 1534 293.5 1598 456"
        stroke="black"
      />
      <img src={Earth} alt="earth" id="earth" />
      <img src={Foreground} alt="q1fg" id="q1fg" />
      <img src={Midground} alt="q1mg" id="q1mg" />
      <img src={Background} alt="q1bg" id="q1bg" />
      <img src={Astronaut} alt="astronaut" id="astronaut" />
      {starPlus(5, 0)}
      {starPlus(15, 40, 24)}
      {starPlus(55, -20, 24)}
      {starPlus(35, 0)}
      {starDot(45, 35)}
      {starDot(60, -30)}
      {starDot(60, 0)}
      {starDot(25, -35)}
    </section>
  );
}
function starPlus(top, left, width) {
  return (
    <img
      src={StarPlus}
      alt="starplus"
      className="starplus"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: width ? `${width}px` : "16px",
      }}
    />
  );
}
function starDot(top, left) {
  return (
    <img
      src={StarDot}
      alt="stardot"
      className="stardot"
      style={{ top: `${top}%`, left: `${left}%` }}
    />
  );
}
