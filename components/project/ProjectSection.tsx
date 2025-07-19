import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function ProjectSection() {
    const [currentProject, setCurrentProject] = useState(0);
    const [isSticky, setIsSticky] = useState(true);
    const { scrollYProgress } = useScroll();
    const projects = [
        {
            name: "Project 1",
            description: "Description of Project 1",
            path: "/images/projects/1.png",
        },
        {
            name: "Project 2",
            description: "Description of Project 2",
            path: "/images/projects/2.png",
        },
        {
            name: "Project 3",
            description: "Description of Project 3",
            path: "/images/projects/3.png",
        },
        {
            name: "Project 4",
            description: "Description of Project 4",
            path: "/images/projects/4.png",
        },
        {
            name: "Project 5",
            description: "Description of Project 5",
            path: "/images/projects/5.png",
        },
    ];

    useEffect(() => {
        scrollYProgress.on("change", (latestValue) => {
            console.log(latestValue);
        });
    }, []);

    return (
        <div
            id="projects-section"
            className={`w-full flex flex-col items-center justify-center bg-[#000319] pt-32 md:-mt-32 px-4 ${isSticky ? 'sticky top-0' : ''}`}
        >
            <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight text-center md:mb-12">
                A small selection of
                <span style={{ color: "#CBACF9" }}> recent projects</span>
            </h1>
            <div className="w-full flex flex-row items-center justify-center gap-4">
                <div className="flex flex-col flex-[2]  items-center justify-center">
                    <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight text-center md:mb-12">
                        {projects[currentProject].name}
                    </h1>
                    <p className="text-white text-lg lg:text-xl font-medium leading-tight text-center md:mb-12">
                        {projects[currentProject].description}
                    </p>
                </div>
                <div className="flex flex-col flex-[1] items-start justify-start relative">
                    <motion.div className="absolute top-0 left-0"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src={projects[currentProject].path} alt="Project 1" width={270} height={480} />
                    </motion.div>
                    <div className="relative">
                        <Image src="/images/mobile.png" alt="Project 1" width={270} height={480} />
                    </div>
                </div>
            </div>
        </div >
    );
}
