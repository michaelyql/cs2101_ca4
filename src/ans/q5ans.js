import CodeBox from "../images/codecontainer.png";
import ReviewInfo from "../images/reviewinfo.png";

export default function Q5ans() {
  return (
    <section id="q5">
      <div id="q5body">
        To all aspiring software engineers, I would say that the key skill is
        not to learn how to code, but how to{" "}
        <span className="accent">communicate well.</span>
        <br />
        <br />
        The code that we write is{" "}
        <span className="accent"> but a means to an end </span> when we are
        trying to build something that might change the world. Some might say
        that in the near future, programmers will no longer be responsible for
        writing code, but instead communicating with machines that will do great
        things on our behalf.
        <br />
        <br />
        Ideas are only as good as they can be communicated to others. Without
        communication, our ideas are nothing but an isolated CPU in a vast
        network of computers, unable to reach others.
      </div>
      <img src={ReviewInfo} alt="reviews" id="reviews" />
      <img src={CodeBox} alt="code" id="code" />
    </section>
  );
}
