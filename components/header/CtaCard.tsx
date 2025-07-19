import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function CtaCard() {
    const socialLinks = [
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/sahil-kumar-b70000200/",
            icon: "/images/social/linkedin.svg"
        },
        {
            name: "Github",
            link: "https://github.com/sahil-kumar-b70000200",
            icon: "/images/social/github.svg"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/sahil_kumar_b70000200/",
            icon: "/images/social/instagram.svg"
        },
        {
            name: "Whatsapp",
            link: "https://wa.me/917600032916",
            icon: "/images/social/whatsapp.svg"
        }
    ];
    const shadowClass = "hover:scale-105 hover:shadow-lg hover:shadow-gray-600/30 transition-all duration-300";

    return (
        <div className="bg-primary-900 border border-primary-300/50 text-white rounded-2xl w-full max-w-3xl mx-auto py-3 px-4 overflow-hidden flex flex-col items-center justify-center relative">
            <h1 className="text-2xl font-bold my-2">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Let's work together")
                            .start();
                    }}
                    options={{
                        strings: ["Let's work together"],
                        autoStart: false,
                        loop: false,
                        cursor: "",
                    }} />
            </h1>
            <button className={`${shadowClass} bg-secondary-500 text-white px-4 py-2 rounded-md my-2 flex justify-center items-center gap-2 cursor-pointer`} onClick={() => window.open("https://wa.me/917600032916", "_blank")}>
                <Image src="/images/social/whatsapp.svg" alt="Whatsapp" width={20} height={20} />
                <span className="text-md leading-none">Get in touch</span>
            </button>
            <ul className="flex justify-center items-center gap-4 my-2">
                {socialLinks.map((link) => (
                    <li key={link.name} className="cursor-pointer hover:scale-110 transition-all duration-300 bg-white rounded-full p-1" onClick={() => window.open(link.link, "_blank")}>
                        <Image src={link.icon} alt={link.name} width={25} height={25} />
                    </li>
                ))}
            </ul>
        </div>
    );
}