"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Projects from "./projects";
import Testimonials from "./testimonials";
import Experience from "./experience";
import Approach from "./approach";
import Footer from "./footer";

// Typewriter component for smooth animated text with subtle shadow effect
const TypewriterText = ({
  text,
  speed = 30,
  delay = 0,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Start animation after delay
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, started]);

  return (
    <span className="relative inline-block">
      <span
        className="transition-all duration-150 ease-out"
        style={{
          opacity: started ? 1 : 0,
        }}
      >
        {displayedText}
      </span>
    </span>
  );
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Add custom CSS for shimmer animation
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes shimmer {
        0% { transform: translateX(-130%); }
        50% { transform: translateX(300%); }
        100% { transform: translateX(-130%); }
      }

      @keyframes arrowRotateDefault {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(-45deg); }
        100% { transform: rotate(0deg); }
      }

      @keyframes arrowRotateHover {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(45deg); }
        100% { transform: rotate(0deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.getElementById("header-section");
      const currentScrollY = window.scrollY;

      if (headerElement) {
        const headerBottom =
          headerElement.offsetTop + headerElement.offsetHeight;
        const isCurrentlyInHeader = currentScrollY < headerBottom;

        if (isCurrentlyInHeader) {
          // Always show navbar when in header section
          setIsVisible(true);
        } else {
          // After header section, show/hide based on scroll direction
          if (currentScrollY > lastScrollY) {
            // Scrolling down - hide navbar
            setIsVisible(false);
          } else {
            // Scrolling up - show navbar
            setIsVisible(true);
          }
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed top-12 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div
          className="backdrop-blur-md border border-white/10 rounded-2xl px-6 md:px-12 py-3 md:py-5"
          style={{
            background: "linear-gradient(to right, #04071D 0%, #0C0E23 100%)",
          }}
        >
          <ul className="flex space-x-4 md:space-x-10 text-sm md:text-base">
            <li className="group relative">
              <button
                onClick={() => scrollToSection("about")}
                className="transition-colors duration-200 hover:!text-white cursor-pointer"
                style={{ color: "#CBACF9" }}
              >
                About
              </button>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </li>
            <li className="group relative">
              <button
                onClick={() => scrollToSection("projects-section")}
                className="transition-colors duration-200 hover:!text-white cursor-pointer"
                style={{ color: "#CBACF9" }}
              >
                Projects
              </button>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </li>
            <li className="group relative">
              <button
                onClick={() => scrollToSection("testimonials-section")}
                className="transition-colors duration-200 hover:!text-white cursor-pointer"
                style={{ color: "#CBACF9" }}
              >
                Testimonials
              </button>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </li>
            <li className="group relative">
              <button
                onClick={() => scrollToSection("contact-section")}
                className="transition-colors duration-200 hover:!text-white cursor-pointer"
                style={{ color: "#CBACF9" }}
              >
                Contact
              </button>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div>
        <div
          id="header-section"
          className="bg-cover bg-center bg-no-repeat bg-[#000319]"
          style={{
            backgroundImage: "url('/images/introbg.svg')",
            width: "screen",
            height: "2000px",
          }}
        >
          {/* Header Content */}
          <div className="flex flex-col items-center pt-[160px] pt-[120px] md:pt-[200px] min-h-screen px-4 md:px-6">
            {/* Small tagline */}
            <p
              className="text-gray-300 tracking-widest uppercase mb-6 md:mb-8 text-center text-xs"
              style={{ letterSpacing: "0.3em" }}
            >
              Dynamic Web Magic with Next.js
            </p>

            {/* Main heading with fixed container */}
            <div className="w-full max-w-5xl mx-auto">
              <h1
                className="text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left"
                style={{
                  height: "auto",
                  minHeight: "120px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div className="mb-1 md:mb-2 text-center md:text-left">
                  <TypewriterText
                    text="Transforming Concepts into"
                    speed={35}
                    delay={200}
                  />
                </div>
                <div className="flex flex-wrap items-start justify-center md:justify-start text-center md:text-left">
                  <span className="text-white mr-1 md:mr-2">
                    <TypewriterText text="Seamless " speed={35} delay={1200} />
                  </span>
                  <span style={{ color: "#CBACF9" }}>
                    <TypewriterText
                      text="User Experiences"
                      speed={35}
                      delay={1600}
                    />
                  </span>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl text-center px-4 mt-5">
              Hi! I'm John Doe, a Next.js Developer based in The USA
            </p>

            {/* CTA Button */}
            <button className="group relative bg-gradient-to-r from-gray-800/20 to-gray-700/50 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 md:space-x-3 overflow-hidden backdrop-blur-sm text-sm md:text-base w-full md:w-auto">
              {/* Continuous animated white shade */}
              <div className="absolute inset-0 md:w-1/3 h-full animate-[shimmer_2s_ease-in-out_infinite] pointer-events-none blur-sm bg-[linear-gradient(135deg,_transparent_30%,_rgba(255,255,255,0.3)_50%,_transparent_70%)]"></div>

              {/* Button text */}
              <span className="relative z-10 transition-all duration-300">
                See my work
              </span>

              {/* Arrow icon with different rotation on hover */}
              <div className="relative z-10 w-5 h-5 flex items-center justify-center">
                <svg
                  className="w-5 h-5 animate-[arrowRotateDefault_2s_ease-in-out_infinite] group-hover:animate-[arrowRotateHover_2s_ease-in-out_infinite]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Arrow that rotates 0° to -45° normally, 0° to 45° on hover */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex flex-col space-y-6 md:space-y-10 px-0 md:px-0">
            <div
              id="about"
              className="relative -mt-60 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 w-full items-center justify-center"
            >
              <div className="w-full md:w-auto flex justify-center">
                <Image
                  src="/images/laptop.png"
                  alt="Hero Image"
                  width={700}
                  height={700}
                  className="w-full max-w-[90%] md:max-w-sm lg:max-w-none"
                />
              </div>
              <div className="flex flex-col space-y-3 md:space-y-5 w-full md:w-auto">
                <div className="flex justify-center">
                  <Image
                    src="/images/techstack.png"
                    alt="Tech Stack"
                    width={540}
                    height={100}
                    className="w-full max-w-[90%] md:max-w-sm lg:max-w-none"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/techstack.png"
                    alt="Tech Stack"
                    width={540}
                    height={100}
                    className="w-full max-w-[90%] md:max-w-sm lg:max-w-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 w-full items-center justify-center ">
              <div className="flex flex-col space-y-3 md:space-y-5 w-full md:w-auto order-2 md:order-1">
                <div className="flex justify-center mt-2 md:mt-0">
                  <Image
                    src="/images/techenthu.svg"
                    alt="Tech Enthusiast"
                    width={540}
                    height={100}
                    className="w-full max-w-[90%] md:max-w-sm lg:max-w-none"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/copyEmail.svg"
                    alt="Copy Email"
                    width={540}
                    height={100}
                    className="w-full max-w-[90%] md:max-w-sm lg:max-w-none"
                  />
                </div>
              </div>
              <div className="w-full md:w-auto flex justify-center order-1 md:order-2">
                <Image
                  src="/images/insideScoop.svg"
                  alt="Inside Scoop"
                  width={700}
                  height={700}
                  className="w-full max-w-[90%] md:max-w-sm lg:max-w-none"
                />
              </div>
            </div>
          </div>

          {/* project section */}
        </div>
        <div
          id="projects-section"
          className="w-full flex flex-col items-center justify-center bg-[#000319] pt-32 md:-mt-32 px-4"
        >
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight text-center md:mb-12">
            A small selection of
            <span style={{ color: "#CBACF9" }}> recent projects</span>
          </h1>
          <Projects />
        </div>

        <div
          id="testimonials-section"
          className="w-full flex flex-col items-center justify-center bg-[#000319] pt-[60px] md:pt-[120px] px-4"
        >
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight text-center md:mb-12">
            Kind words from
            <span style={{ color: "#CBACF9" }}> satisfied clients</span>
          </h1>
          <Testimonials />
        </div>

        <div className="w-full flex flex-col items-center justify-center bg-[#000319] pt-[60px] md:pt-[120px] px-4">
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight text-center md:mb-12">
            My work
            <span style={{ color: "#CBACF9" }}> experience</span>
          </h1>
          <Experience />
        </div>

        <div className="w-full flex flex-col items-center justify-center bg-[#000319] pt-[40px] md:pt-[80px] px-4">
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight text-center md:mb-12">
            My
            <span style={{ color: "#CBACF9" }}> approach</span>
          </h1>
          <Approach />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Header;
