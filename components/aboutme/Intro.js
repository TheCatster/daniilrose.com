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
                My name is Daniil Rose. I am an integrated undergraduate-graduate (IUG)
	    	student at The Pennsylvania State University (WE ARE!)- concurrently pursuing
	    	a master&apos;s in international affairs, a Bachelor of Science in computer engineering,
	    	and a Bachelor of Science in German. At Penn State, I serve as the <b>President</b> of
	    	the 75th Assembly of the Graduate and Professional Student Association, or <em>GPSA</em>.
	    	I also have the honor of serving as the <b>emcee</b> for Penn State Homecoming (2025).
            </p>
	    <p>
	    	I am passionate about engineering and technology policy,
                and seek to use my diverse experience in engineering and leadership to
	    	further the world of policy. In particular, I actively research polycentricity
	    	in a globalized world from the perspective of artificial intelligence governance.
                On the engineering side, I have experience in a variety of fields: from
	    	working on bomb-disposal robots to experience developing 
	    	satellites that have gone to space!
            </p>
            <p>
                I worked over the summer as an intern at RTD Embedded Technologies and continued
                working there throughout the 2024 - 2025 school year, spearheading a new IoT
	    	product line, designing firmware for embedded systems and
                designing new processes to enable smoother operations for manufacturing.
                I previously worked as a systems engineering intern at Peraton Remotec, an embedded
                systems engineer at Quub, a start-up satellite firm, which included
                mechanical and electrical components. I designed PCBs and mechanical
                parts in CAD programs such as KiCad, Eagle, SolidWorks, and Fusion 360,
                and programmed my systems using the C, Rust, and Python languages.
            </p>
        </div>
    );
};

const IntroImage = () => {
    return (
        <div className="content-center px-1">
            <Image
                className="rounded-lg p-0 w-10 h-10 object-scale"
                src={me}
                alt="Daniil Rose"
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto",
                }}
                placeholder="blur"
                priority
            />
        </div>
    );
};

const FSFBadge = () => {
    return (
        <div className="content-center px-1">
            <Image
                className="rounded-lg p-0 object-scale"
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
        <div className="content-center px-1">
            <Image
                className="rounded-lg p-0 object-scale"
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
        <div className="content-center px-1 py-0">
            <Image
                className="rounded-lg p-0 object-scale"
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
        <div className="flex py-0 place-items-center">
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
