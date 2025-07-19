import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function CurrentProject() {
    return (
        <div className="bg-primary-900 border border-primary-300/50 text-white rounded-2xl w-full max-w-3xl mx-auto overflow-hidden relative">
            <div className="relative">
                <Image
                    src="/images/curently.png"
                    alt="Inside Scoop"
                    width={700}
                    height={700}
                    className="w-full max-w-[90%] md:max-w-sm lg:max-w-none mx-auto"
                />

                <h1 className="absolute left-8 top-1/2 text-2xl font-bold z-20">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Currently working on")
                                .start();
                        }}
                        options={{
                            strings: ["Currently working on"],
                            autoStart: false,
                            loop: false,
                            cursor: "",
                        }} />
                </h1>
            </div>
        </div>
    );
}
