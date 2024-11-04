import Blackboard from "../images/blackboard.png";
import Teacher from "../images/teacher.png";

export default function Q2ans() {
  return (
    <section id="q2">
      <div id="q2title">
        Which elements or topics of communication have <br />
        been particularly significant or pervasive for
        <br />
        you throughout your learning journey?
      </div>
      <div id="q2body">
        I would say that <span className="accent">listening skills</span> and{" "}
        <span className="accent">conflict resolution techniques </span>
        have been the most impactful communication elements on my learning
        journey thus far.
        <br />
        <br />
        Having had to navigate numerous heated arguments between team mates ever
        since primary school, I've learnt the importance of tuning in and truly
        listening to what the other party is saying.
        <br />
        <br />
        As Epictetus, a Greek philosopher, once said: "We have two ears and one
        mouth so that we can listen twice as much as we speak." <br />
        <br />
        People won't remember what you said, nor the things you did; they only
        remember how you made them feel. That is why it is so important to make
        them feel heard. It is only through listening with an active ear that I
        have made lifelong friends throughout the 14 years of my academic life
        thus far, and gained insights far beyond what I could have learnt by
        speaking instead of listening.
      </div>
      <img src={Blackboard} alt="blackboard" id="blackboard" />
      <img src={Teacher} alt="teacher" id="teacher" />
    </section>
  );
}
