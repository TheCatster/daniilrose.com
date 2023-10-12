import React from "react";
import Image from "next/image";
import Link from "next/link";

const IntroText = () => {
    const LINKEDIN_URL = "https://www.linkedin.com/in/daniil-rose/"
    return (
        <div className="box-content p-4 text-sm lg:text-md">
            <h1 className={"text-xl"}>
                {"Hello! I'm Daniil, a computer engineering and German student at Penn State."}
            </h1>
            <p>
                I worked over the summer as an intern at Peraton Remotec, helping design systems for robots using ROS.
                I created an encrypted quick-patch system for updating Remotec robots easily. I previously
                worked as an embedded systems engineer at Quub, which
                included mechanical and electrical components at a satellite firm. I designed PCBs and
                mechanical parts in CAD programs such as KiCad, Eagle, SolidWorks, and
                Fusion 360, and programmed my systems in the C, Rust, and Python languages.
            </p>
            <p>
                I am a member of the <em>Free Software Foundation</em>,{" "}
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
            <div className={"flex"}>
                <Link href={"https://www.linkedin.com/in/daniil-rose"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"}>
                    {"View LinkedIn"}
                </Link>
                <Link href={"https://github.com/TheCatster"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"}>
                    {"View GitHub"}
                </Link>
            </div>
        </div>
    );
};

const IntroImage = () => {
    return (
        <div className="content-center p-1">
            <Image
                className="rounded-lg object-scale"
                src={"/circuit-rose-black.svg"}
                width={500}
                height={500}
                alt="Daniil Rose"
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
                src={"/vercel.svg"}
                width={100}
                height={24}
                alt="FSF Member Badge"
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
                src={"/vercel.svg"}
                width={100}
                height={24}
                alt="Mensa Member Badge"
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
                src={"/vercel.svg"}
                width={100}
                height={24}
                alt="EFF Member Badge"
                priority
            />
        </div>
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

export default function Intro() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <IntroText />
            <div className="flex flex-col place-items-center">
                <IntroImage />
                <IntroBadges />
            </div>
        </div>
    );
};
