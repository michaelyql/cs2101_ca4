import VideoCall from "../images/videocall.png";

export default function Q4ans() {
  return (
    <section id="q4">
      <div id="q4title">
        How or which aspects of communication topics, were most valuable to you
        <br />
        and which of these do you foresee applying in your academic and personal
        <br />
        life and in your future role as a professional in the software
        engineering industry?
      </div>
      <div id="q4body">
        The most valuable communication topic to me is{" "}
        <span className="accent">cross-cultural communication skills</span>,
        because I expect that I will have to work with cross-cultural and
        international teams in the future.
        <br />
        <br />
        Not everyone will be of the same culture, upbringing and background, so
        it is crucial that I understand how to bridge the gap between different
        cultures, as well as be aware of different languages, mannerisms and
        practices.
        <br />
        <br />
        Having cross-cultural communication skills extends beyond the workplace;
        it reaches into my personal and academic life as well. <br />
        <br />
        Being surrounded by friends of different races and ethnicities,
        cross-cultural communication skills has allowed me to overcome
        superficial differences in our cultures and practices, and allowed me to
        gain a greater world view, forge stronger friendships and make
        everlasting memories.
      </div>
      <img src={VideoCall} alt="videocall" id="videocall" />
    </section>
  );
}
