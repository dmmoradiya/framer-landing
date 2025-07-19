"use client";
import Image from "next/image";

// Technology to image mapping
const techImageMap: { [key: string]: string } = {
  // Primary technologies
  React: "/images/projects/tech.svg",
  TypeScript: "/images/projects/tech-1.svg",
  "Three.js": "/images/projects/tech-2.svg",
  "Framer Motion": "/images/projects/tech-3.svg",
  "Next.js": "/images/projects/tech-4.svg",

  // Additional technologies (cycling through available images)
  "Socket.io": "/images/projects/tech.svg",
  Stripe: "/images/projects/tech-1.svg",
  GSAP: "/images/projects/tech-2.svg",
  "Node.js": "/images/projects/tech-3.svg",
  MongoDB: "/images/projects/tech-4.svg",
  Express: "/images/projects/tech.svg",
  "Vue.js": "/images/projects/tech-1.svg",
  Angular: "/images/projects/tech-2.svg",
  "Tailwind CSS": "/images/projects/tech-3.svg",
  Firebase: "/images/projects/tech-4.svg",
};

const projects = [
  {
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: "/images/projects/Project1.svg",
    technologies: ["React", "TypeScript", "Three.js", "Framer Motion"],
    link: "#",
    linkLabel: "Check Live Site",
  },
  {
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    image: "/images/projects/Project2.svg",
    technologies: ["React", "TypeScript", "Three.js", "Framer Motion"],
    link: "#",
    linkLabel: "Check Live Site",
  },
  {
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    image: "/images/projects/Project3.svg",
    technologies: ["React", "TypeScript", "Three.js", "Framer Motion"],
    link: "#",
    linkLabel: "Check Live Site",
  },
  {
    title: "Animated Apple iPhone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    image: "/images/projects/Project14.svg",
    technologies: ["React", "TypeScript", "Three.js", "Framer Motion"],
    link: "#",
    linkLabel: "Check Live Site",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="group relative rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:scale-[1.02] p-4 md:p-6"
      style={{
        background:
          "linear-gradient(135deg, #04071D 0%, #0C0E23 50%, #1A1B3A 100%)",
      }}
    >
      {/* Large Project Image */}
      <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300" />
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          {project.title}
        </h3>

        <p className="text-gray-300 text-xl leading-relaxed">
          {project.description}
        </p>

        {/* Bottom Section with Technologies and Button */}
        <div className="flex items-center justify-between pt-4">
          {/* Technology Icons */}
          <div className="flex items-center gap-1">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="relative w-10 h-10 md:w-14 md:h-14"
                title={tech}
              >
                <Image
                  src={techImageMap[tech] || "/images/projects/tech.svg"}
                  alt={tech}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1 md:gap-2 py-3 px-6 rounded-xl md:text-lg transition-all duration-200"
            style={{
              color: "#CBACF9",
            }}
          >
            {project.linkLabel}
            {/* Arrow Container */}
            <div className="relative w-5 h-5">
              {/* Default Arrow (↗) */}
              <svg
                className="w-5 h-5 absolute transition-all duration-200 group-hover/btn:opacity-0 group-hover/btn:scale-75"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l10-10M17 17V7H7"
                />
              </svg>
              {/* Hover Arrow (↘) */}
              <svg
                className="w-5 h-5 absolute transition-all duration-200 opacity-0 scale-75 group-hover/btn:opacity-100 group-hover/btn:scale-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7l10 10M17 7v10H7"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <section className="w-full py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
