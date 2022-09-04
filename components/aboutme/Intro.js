import React from "react";
import Image from "next/image";
import me from "../../public/images/danya.webp";
import fsf from "../../public/images/fsf.webp";
import eff from "../../public/images/eff.webp";
import mensa from "../../public/images/mensa.webp";

const IntroText = () => {
    return (
        <div className="box-content p-4 text-sm lg:text-md">
            <p>
                My name is Daniil Rose. I am a computer engineering and German dual-major at Penn State University,
                with a passion for Lisp, Rust, and hardware hacking. Experimenting with robotic and mechatronic systems
                is also an
                interest of mine. I work as a DevOps engineer at a satellite firm, helping automate our processes using
                Jenkins and
                designing internal tools. I previously worked as an embedded systems engineer, which
                included mechanical and electrical components. I design PCBs and
                mechanical parts in CAD programs such as KiCad, Eagle, SolidWorks, and
                Fusion 360; I program my systems in the C, Rust, and Python languages,
                and do various calculations related to the physics of our units.
            </p>
            <p>
                I am a member of <em>Mensa</em>, the <em>Free Software Foundation</em>,{" "}
                the <em>IEEE</em> and the <em>Electronic Frontier Foundation</em>. Most of my projects are GNU
                GPL v3.0 licensed, and I believe in the freedom of knowledge, as well as
                self-hosting and decentralisation.
            </p>
            <p>
                I pride myself in being as efficient and knowledgeable as is reasonable.
                This applies to all my work, whether it is programming, CAD design, or
                everyday life. I have strong communication skills, and utilise these to
                further my understanding of all topics.
            </p>
            <p>
                I have a blog called
                <a href="https://www.daniilrose.com/blog">
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
    return (
        <div className="content-center p-1">
            <Image
                className="rounded-lg object-scale"
                src={me}
                alt="Daniil Rose"
                placeholder="blur"
                priority
            />
        </div>
    );
};

const FSFBadge = () => {
    return (
        <div className="content-center p-1">
            <Image
                className="rounded-lg object-scale"
                src={fsf}
                alt="FSF Member Badge"
                placeholder="blur"
                priority
            />
        </div>
    );
};

const MensaBadge = () => {
    return (
        <div className="content-center p-1">
            <Image
                className="rounded-lg object-scale"
                src={mensa}
                alt="Mensa Member Badge"
                placeholder="blur"
                priority
            />
        </div>
    );
};

const EFFBadge = () => {
    return (
        <div className="content-center p-1">
            <Image
                className="rounded-lg object-scale"
                src={eff}
                alt="EFF Member Badge"
                placeholder="blur"
                priority
            />
        </div>
    );
};

const IntroBadges = () => {
    return (
        <div className="flex place-items-center">
            <FSFBadge/>
            <EFFBadge/>
            <MensaBadge/>
        </div>
    );
};

const Intro = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <div className="flex flex-col place-items-center">
                <IntroImage/>
                <IntroBadges/>
            </div>
            <IntroText/>
        </div>
    );
};

export default Intro;
