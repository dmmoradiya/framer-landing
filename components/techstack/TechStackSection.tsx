'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import TechStackCard from "./TechStackCard";

const techStack = [
    {
        name: "Dart",
        icon: "/images/icons/dart.svg",
    },
    {
        name: "Flutter",
        icon: "/images/icons/flutter.svg",
    },
    {
        name: "Next.js",
        icon: "/images/icons/nextjs.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "/images/icons/tailwind.svg",
    },
    {
        name: "Node.js",
        icon: "/images/icons/node.svg",
    },
    {
        name: "JavaScript",
        icon: "/images/icons/javascript.svg",
    },
    {
        name: "Typescript",
        icon: "/images/icons/typescript.svg",
    },
    {
        name: "Android",
        icon: "/images/icons/android.svg",
    },
    {
        name: "Digital Ocean",
        icon: "/images/icons/digital.svg",
    },
    {
        name: "Docker",
        icon: "/images/icons/docker.svg",
    },
    {
        name: "Figma",
        icon: "/images/icons/figma.svg",
    },
    {
        name: "Git",
        icon: "/images/icons/git.svg",
    },
    {
        name: "JWT",
        icon: "/images/icons/jsonwebtokens.svg",
    },
    {
        name: "Kubernetes",
        icon: "/images/icons/kubernetes.svg",
    },
    {
        name: "Redis",
        icon: "/images/icons/redis.svg",
    },
    {
        name: "Prisma",
        icon: "/images/icons/prisma.svg",
    },
    {
        name: "MongoDB",
        icon: "/images/icons/mongodb.svg",
    },
    {
        name: "MySQL",
        icon: "/images/icons/mysql.svg",
    },
    {
        name: "PostgreSQL",
        icon: "/images/icons/postgresql.svg",
    },
    {
        name: "Firebase",
        icon: "/images/icons/firebase.svg",
    },
    {
        name: "Aws",
        icon: "/images/icons/aws.svg",
    },
    {
        name: "Nginx",
        icon: "/images/icons/nginx.svg",
    },
    {
        name: "GCP",
        icon: "/images/icons/google.svg",
    },
];

const subtitles = [
    "I constantly try to improve",
    "Building beautiful UIs",
    "Creating scalable backends",
    "Optimizing performance",
];

export default function TechStackSection() {
    const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const scrollingStack = [...techStack, ...techStack];
    const scrollingStackReversed = scrollingStack.toReversed();

    return (
        <div className="bg-primary-900 border border-primary-300/50 text-white rounded-2xl w-full max-w-3xl mx-auto overflow-hidden relative">
            <div className="absolute inset-0 flex justify-end items-center pointer-events-none">
                <div className="relative h-screen w-2/3 left-8 overflow-hidden rotate-12">
                    <div className="flex gap-4 absolute">
                        <motion.div
                            className="flex flex-col gap-3"
                            animate={{ y: ['0%', '-50%'] }}
                            transition={{
                                duration: 15,
                                ease: 'linear',
                                repeat: Infinity,
                            }}
                        >
                            {scrollingStack.map((tech, idx) => (
                                <TechStackCard key={`up-${idx}`} {...tech} />
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex flex-col gap-3"
                            animate={{ y: ['-50%', '0%'] }}
                            transition={{
                                duration: 15,
                                ease: 'linear',
                                repeat: Infinity,
                            }}
                        >
                            {scrollingStackReversed.map((tech, idx) => (
                                <TechStackCard key={`down-${idx}`} {...tech} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 my-16 p-6">
                <div className="mb-4 text-gray-400 text-sm h-6">
                    {mounted ? (
                        <Typewriter
                            options={{
                                strings: [subtitles[currentSubtitleIndex]],
                                autoStart: true,
                                loop: false,
                                delay: 50,
                            }}
                        />
                    ) : (
                        <span>{subtitles[0]}</span>
                    )}
                </div>

                <h2 className="text-3xl font-bold mb-6">
                    {mounted ? (
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("My Tech Stack")
                                    .start();
                            }}
                            options={{
                                strings: ["My Tech Stack"],
                                autoStart: false,
                                loop: false,
                                cursor: "",
                            }}
                        />
                    ) : (
                        "My tech stack"
                    )}
                </h2>
            </div>
        </div>
    );
}
