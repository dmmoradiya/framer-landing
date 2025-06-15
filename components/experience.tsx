"use client";
import Image from "next/image";

const experiences = [
  {
    title: "Frontend Engineer Intern",
    description:
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    logo: "/images/experience/ex1.svg",
  },
  {
    title: "Mobile App Dev - JSM Tech",
    description:
      "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    logo: "/images/experience/ex2.svg",
  },
  {
    title: "Freelance App Dev Project",
    description:
      "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    logo: "/images/experience/ex3.svg",
  },
  {
    title: "Lead Frontend Developer",
    description:
      "Developed and maintained user-facing features using modern frontend technologies.",
    logo: "/images/experience/ex4.svg",
  },
];

function ExperienceCard({
  experience,
}: {
  experience: (typeof experiences)[0];
}) {
  return (
    <div
      className="group relative rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:scale-[1.02] py-4 md:p-6"
      style={{
        background:
          "linear-gradient(135deg, #04071D 0%, #0C0E23 50%, #161935 100%)",
      }}
    >
      <div className="flex md:flex-row flex-col justify-center space-x-8 ">
        <div className="relative w-20 h-20 md:w-24 md:h-24 px-20 mb-5 md:px-0 md:mb-0">
          <Image
            src={experience.logo}
            alt={experience.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="text-start space-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {experience.title}
          </h3>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed text-[#BEC1DD]">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const Experience = () => {
  return (
    <section className="w-full md:py-20 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Experience Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
