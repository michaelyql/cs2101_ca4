import Podium from "../images/podium.png";
import Seal from "../images/seal.png";
import Speaker from "../images/speaker.png";

export default function Q3ans() {
  return (
    <section id="q3">
      <div id="q3title">
        What has been your primary challenge in acquiring a specific
        <br />
        communication topic, and how do you plan to improve in this area?
      </div>
      <div id="q3body">
        My main challenge in acquiring a communication topic has been learning
        how to better implement{" "}
        <span className="accent">non-verbal communication skills</span> in my
        presentations.
        <br />
        <br />
        Being naturally introverted, I find it challenging to speak in front of
        people. I often feel anxious and worried that I will say something
        wrong, which results in me forgetting to maintain eye contact with the
        audience and not being aware of myself fidgeting and having poor body
        language.
        <br />
        <br />
        In order to get better at using non-verbal modes of communication, I
        intend to adopt the habit of recording myself rehearsing, so that I can
        identify areas for improvement. Additionally, I will also ask for help
        from my friends and family so that I can conduct mock presentations and
        ask for their third person perspectives on my performance.
      </div>
      <img src={Podium} alt="podium" id="podium" />
      <img src={Speaker} alt="speaker" id="speaker" />
      <img src={Seal} alt="seal" id="seal" />
    </section>
  );
}
