"use client";
import { useEffect, useState } from "react";

const approachSteps = [
  {
    phase: "Phase 1",
    color: "text-purple-300 bg-purple-300/10 border border-purple-300/30",
    ring: "#CBACF9",
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    phase: "Phase 2",
    color: "text-blue-300 bg-blue-300/10 border border-blue-300/30",
    ring: "#7DD3FC",
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    phase: "Phase 3",
    color: "text-yellow-200 bg-yellow-200/10 border border-yellow-200/30",
    ring: "#FDE68A",
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
];

function ApproachCard({
  step,
  isHovered,
  onHover,
  onLeave,
  onClick,
  isMobile,
}: {
  step: (typeof approachSteps)[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  isMobile: boolean;
}) {
  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 ${isMobile ? "active:scale-95 touch-manipulation" : ""
        }`}
      onMouseEnter={!isMobile ? onHover : undefined}
      onMouseLeave={!isMobile ? onLeave : undefined}
      onClick={isMobile ? onClick : undefined}
      style={{ minHeight: 420 }}
    >
      {/* Card Background */}
      <div
        className="relative h-[650px] md:w-[400px] w-[100%] rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 p-8 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #04071D 0%, #0C0E23 50%, #1A1B3A 100%)",
        }}
      >
        {/* Approach BG Image - Default */}
        <img
          src="/images/approach-bg.svg"
          alt="approach background"
          className={`absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
            }`}
          style={{ objectFit: "cover" }}
        />

        {/* Approach BG Image - Hover */}
        <img
          src="/images/approach-bg-hover.svg"
          alt="apprgreatoach background hover"
          className={`absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-500 ${isHovered ? "opacity-40" : "opacity-0"
            }`}
          style={{ objectFit: "cover" }}
        />

        {/* Central Animated Ring and Phase */}
        <div className="relative flex flex-col items-center justify-center w-full h-full z-10">
          {/* Ring and Phase Button Container - Moves up on hover */}
          <div
            className={`relative flex items-center justify-center w-44 h-44 mx-auto transition-all duration-500 ${isHovered ? "-translate-y-20" : "translate-y-0"
              }`}
          >
            <div className="relative z-20 flex items-center justify-center w-full h-full">
              <span
                className={`px-6 py-4 rounded-xl font-semibold text-3xl transition-all duration-300
                  ${step.color}
                  ${isHovered
                    ? "bg-opacity-100 shadow-lg scale-105"
                    : "bg-opacity-80"
                  }
                `}
                style={{
                  background: isHovered
                    ? "rgba(20,20,40,0.95)"
                    : "rgba(20,20,40,0.7)",
                  borderWidth: "1.5px",
                  borderStyle: "solid",
                }}
              >
                {step.phase}
              </span>
            </div>
          </div>

          <div
            className={`absolute pt-40 px-2 text-center transition-all duration-700 ease-out ${isHovered
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-28 translate-x-28 pointer-events-none"
              }`}
          >
            <h3 className="text-white text-3xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Approach = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMobileClick = (index: number) => {
    // Only for mobile: toggle the card (click to show/hide)
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  const handleDesktopHover = (index: number) => {
    // Only for desktop: show on hover
    setHoveredIndex(index);
  };

  const handleDesktopLeave = () => {
    // Only for desktop: hide on mouse leave
    setHoveredIndex(null);
  };

  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-10 bg-[#000319]">
      <div className="max-w-7xl mx-auto">
        {/* Mobile instruction */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachSteps.map((step, index) => (
            <ApproachCard
              key={index}
              step={step}
              isHovered={hoveredIndex === index}
              onHover={() => handleDesktopHover(index)}
              onLeave={handleDesktopLeave}
              onClick={() => handleMobileClick(index)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
