import React from "react";
import useProgressiveImg from "../ProgressiveImg";
import LazyLoad from "react-lazyload";

import me from "../../img/danya.webp";
import meMin from "../../img/danya-min.webp";

import fsf from "../../img/fsf.webp";
import eff from "../../img/eff.webp";
import mensa from "../../img/mensa.webp";

const IntroText = () => {
  return (
    <div className="box-content p-4">
      <p>
        My name is Daniel Rose. I am an embedded systems engineering student,
        with a passion for Lisp, Rust, and Data Science. Experimenting with
        robotic and mechatronic systems is also an interest of mine. I work as
        an apprentice satellite engineer, which includes mechanical and
        electrical components. I design PCBs and mechanical parts in CAD
        programs such as KiCad, Eagle, SolidWorks, and Fusion 360; I program my
        systems in the C, Rust, and Python languages, and do various
        calculations related to the physics of our units.
      </p>
      <br />
      <p>
        I am a member of <em>Mensa</em>, the <em>Free Software Foundation</em>{" "}
        and the <em>Electronic Frontier Foundation</em>. All my projects are GNU
        GPL v3.0 licensed, and I believe in the freedom of knowledge, as well as
        self-hosting and decentralisation.
      </p>
      <br />
      <p>
        I pride myself in being as efficient and knowledgeable as is reasonable.
        This applies to all my work, whether it is programming, CAD design, or
        everyday life. I have strong communication skills, and utilise these to
        further my understanding of all topics.
      </p>
      <br />
      <p>
        I have a blog called
        <a href="https://www.regressions.xyz">
          <em> regressions</em>
        </a>
        , where I discuss various mathematical concepts, computer knowledge, and
        Linux things (although finding time to write new articles can be
        challenging!).
      </p>
    </div>
  );
};

const IntroImage = () => {
  const [src, { blur }] = useProgressiveImg(meMin, me);

  return (
    <LazyLoad once>
      <div className="content-center p-1">
        <img
          className="rounded-lg object-scale"
          src={src}
          alt="Daniel Rose"
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
        />
      </div>
    </LazyLoad>
  );
};

const FSFBadge = () => {
  return (
    <LazyLoad once>
      <div className="content-center p-1">
        <img
          className="rounded-lg object-scale"
          src={fsf}
          alt="FSF Member Badge"
        />
      </div>
    </LazyLoad>
  );
};

const MensaBadge = () => {
  return (
    <LazyLoad once>
      <div className="content-center p-1">
        <img
          className="rounded-lg object-scale"
          src={mensa}
          alt="Mensa Member Badge"
        />
      </div>
    </LazyLoad>
  );
};

const EFFBadge = () => {
  return (
    <LazyLoad once>
      <div className="content-center p-1">
        <img
          className="rounded-lg object-scale"
          src={eff}
          alt="EFF Member Badge"
        />
      </div>
    </LazyLoad>
  );
};

const IntroBadges = () => {
  return (
    <div className="flex place-items-center">
      <FSFBadge />
      <EFFBadge />
      <MensaBadge />
    </div>
  );
};

const Intro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
      <div className="flex flex-col place-items-center">
        <IntroImage />
        <IntroBadges />
      </div>
      <IntroText />
    </div>
  );
};

export default Intro;
