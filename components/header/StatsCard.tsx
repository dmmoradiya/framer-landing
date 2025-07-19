import CountUp from "react-countup";
import Typewriter from "typewriter-effect";

export default function StatsCard() {
    return (
        <div className="bg-primary-900 border border-primary-300/50 text-white rounded-2xl w-full max-w-4xl mx-auto py-6 px-6 overflow-hidden flex flex-col items-center justify-center relative">
            <h1 className="text-2xl font-bold my-2">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("A Snapshot of Work")
                            .start();
                    }}
                    options={{
                        strings: ["A Snapshot of Work"],
                        autoStart: false,
                        loop: false,
                        cursor: "",
                    }} />
            </h1>
            <ul className="flex flex-row items-center justify-center gap-6 my-2">
                <li className="flex flex-col items-center justify-center">
                    <CountUp end={15} duration={2} className="text-3xl text-yellow-500" />
                    <span>Projects</span>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <CountUp end={10} duration={2} className="text-3xl text-teal-500" />
                    <span>Clients</span>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <CountUp end={5} duration={2} className="text-3xl text-indigo-500" />
                    <span>Years</span>
                </li>
            </ul>
        </div>
    );
}
