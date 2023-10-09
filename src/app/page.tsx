import Image from "next/image";

export default function Home() {
    return (
        <main className={"flex min-h-screen justify-between p-24"}>
            <div className={"max-w-5xl w-full justify-between"}>
                <h1 className={"text-xl"}>
                    {"Hello! I'm Daniil, a computer engineering and German student at Penn State."}
                </h1>
                <p>
                    {"I study and develop embedded systems and Linux-based operating systems."}
                </p>
                <p>
                    {"I'm a student at Penn State, where I am dual-majoring in Computer Engineering and German."}
                </p>
                <p>
                    {"In my free time, I mess with RTOSes, write kernel modules, and hang out with my friends."}
                </p>
                <div className={"flex-col justify-between"}>
                    <button>{"View LinkedIn"}</button>
                    <button>{"View GitHub"}</button>
                </div>
            </div>
            <div className={"max-w-5xl w-full justify-between text-md"}>
                <Image
                    src={"/vercel.svg"}
                    alt={"Vercel Logo"}
                    className={"dark:invert"}
                    width={100}
                    height={24}
                    priority
                />
            </div>
        </main>
    )
}
