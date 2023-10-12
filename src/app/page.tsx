import Intro from "./components/Intro";
import Interests from "./components/Interests";

export default function Home() {
    return (
        <div className={"md:container md:mx-auto"}>
            <Intro />
            <Interests />
        </div>
    )
}
