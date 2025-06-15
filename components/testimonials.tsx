"use client";
import Image from "next/image";
import { useEffect } from "react";

const testimonials = [
  {
    quote:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    image: "/images/testimonial.svg",
  },
  {
    quote:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    image: "/images/testimonial.svg",
  },
  {
    quote:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    image: "/images/testimonial.svg",
  },
];

// Company logos data
const companyLogos = [
  { name: "Stream", logo: "/images/testimonials/stear.svg" },
  { name: "Docker", logo: "/images/testimonials/docker.svg" },
  { name: "Cloudinary", logo: "/images/testimonials/Cloudinary.svg" },
  { name: "Appwrite", logo: "/images/testimonials/Appwrite.svg" },
  { name: "Hostinger", logo: "/images/testimonials/Hostinger.svg" },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div
      className="group relative rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:scale-[1.02] p-6 md:p-14"
      style={{
        background:
          "linear-gradient(135deg, #04071D 0%, #0C0E23 50%, #1A1B3A 100%)",
      }}
    >
      {/* Quote */}
      <div className="mb-8">
        <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
          {testimonial.quote}
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/20">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Name and Title */}
        <div>
          <h4 className="text-white text-lg md:text-xl font-semibold">
            {testimonial.name}
          </h4>
          <p className="text-gray-300 text-sm md:text-base">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="w-full py-10 md:px-10">
      <div className="max-w-10xl mx-auto">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>

        {/* Continuous Scrolling Company Logos */}
        <div className="relative overflow-hidden">
          {/* Left shadow/fade gradient */}
          <div
            className="md:absolute left-0 top-0 w-32 md:w-48 lg:w-64 h-full z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #000319 0%, #000319 20%, rgba(0, 3, 25, 0.8) 40%, rgba(0, 3, 25, 0.4) 70%, transparent 100%)",
            }}
          ></div>

          {/* Right shadow/fade gradient */}
          <div
            className="md:absolute right-0 top-0 w-32 md:w-48 lg:w-64 h-full z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, #000319 0%, #000319 20%, rgba(0, 3, 25, 0.8) 40%, rgba(0, 3, 25, 0.4) 70%, transparent 100%)",
            }}
          ></div>

          <div
            className="flex animate-scroll-right md:animate-scroll-right-desktop"
            style={{
              boxShadow:
                "inset 40px 0 40px -20px rgba(0, 3, 25, 0.8), inset -40px 0 40px -20px rgba(0, 3, 25, 0.8)",
            }}
          >
            {/* First set of logos */}
            {companyLogos.map((company, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={110}
                  height={36}
                  className="h-7 md:h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companyLogos.map((company, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={110}
                  height={36}
                  className="h-7 md:h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {companyLogos.map((company, idx) => (
              <div
                key={`third-${idx}`}
                className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={110}
                  height={36}
                  className="h-7 md:h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
