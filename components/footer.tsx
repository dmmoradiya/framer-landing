"use client";

import { useEffect } from "react";

const Footer = () => {
  // Add custom CSS for shimmer and arrow animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        50% { transform: translateX(300%); }
        100% { transform: translateX(-100%); }
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
  return (
    <div
      id="contact-section"
      className="relative bg-cover bg-center bg-no-repeat bg-[#000319] flex flex-col items-center justify-center px-6"
      style={{
        backgroundImage: "url('/images/pattern.svg')",
      }}
    >
      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl py-12 md:py-32 mx-auto">
        {/* Main Heading */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Ready to take your digital
          <br />
          presence to the next level?
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>

        {/* CTA Button */}
        <button className="group relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3 overflow-hidden backdrop-blur-sm">
          {/* Continuous animated 45-degree white shade */}
          <div className="absolute inset-0 w-1/3 h-full animate-[shimmer_2s_ease-in-out_infinite] pointer-events-none blur-sm bg-[linear-gradient(135deg,_transparent_30%,_rgba(255,255,255,0.3)_50%,_transparent_70%)]"></div>

          {/* Button text */}
          <span className="relative z-10 transition-all duration-300">
            Get in touch
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

      {/* Footer Bottom */}
      <div className="bottom-8 left-0 right-0 flex flex-col md:flex-row items-center justify-between py-4 md:px-12 w-[80%]">
        {/* Copyright */}
        <p className="text-gray-400 text-lg mb-4 md:mb-0">
          Copyright ©2025 Renal Lumanoy
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {/* Twitter */}

          <img
            src="/images/footer/twitter.svg"
            alt="Twitter"
            className="w-12 h-12"
          />

          {/* LinkedIn */}

          <img
            src="/images/footer/linkdin.svg"
            alt="LinkedIn"
            className="w-12 h-12"
          />

          {/* Instagram */}

          <img
            src="/images/footer/insta.svg"
            alt="Instagram"
            className="w-12 h-12"
          />

          {/* WhatsApp */}

          <img
            src="/images/footer/whatsapp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
          />

          {/* GitHub */}

          <img
            src="/images/footer/github.svg"
            alt="GitHub"
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
