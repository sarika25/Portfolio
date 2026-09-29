import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Projects = ({ darkMode }) => {
  const [expanded, setExpanded] = useState({});

  const projects = [
    {
      title: "SmartCart",
      category: "MERN Stack",
      featured: true,
      image: "/projects/smartcart.png",
      description:
        "An AI-powered e-commerce platform built with the MERN stack, featuring secure user authentication, product browsing, cart, wishlist, checkout, and order management. It also includes a Gemini-powered AI shopping assistant that understands natural-language requirements, asks relevant questions, and provides personalized product recommendations based on user preferences and budget.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Gemini AI",
      ],
      github: "https://github.com/sarika25/SmartCart",
      live: "https://smartcart-pearl.vercel.app/",
    },
    {
      title: "Portfolio Website",
      category: "React",
      featured: false,
      image: "/projects/portfolio.png",
      description:
        "A responsive personal portfolio website built with React to showcase my technical skills, professional experience, projects, and career journey. It features a modern and interactive UI with dark mode, smooth animations, responsive layouts, project filtering, social links, and a dedicated contact section for professional inquiries.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/sarika25/Portfolio",
      live: "https://sarika-portfolio-woad.vercel.app/",
    },
    {
      title: "CozyCup",
      category: "Frontend",
      featured: false,
      image: "/projects/cozycup.png",
      description:
        "A modern and responsive coffee shop website designed to showcase the café's menu, products, services, and brand identity. Features an engaging user interface with interactive sections and a clean, visually appealing layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sarika25/Cozy-Cup",
      live: "https://sarika25.github.io/Cozy-Cup/",
    },
    {
      title: "Check-Mate",
      category: "Frontend",
      featured: false,
      image: "/projects/check-mate.png",
      description:
        "A responsive and interactive to-do list application that helps users manage their daily tasks efficiently. Users can add new tasks, mark them as completed, and remove tasks through a simple and intuitive interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sarika25/Check-Mate",
      live: "https://sarika25.github.io/Check-Mate/",
    },
    {
      title: "Drum Kit",
      category: "JavaScript",
      featured: false,
      image: "/projects/drum-kit.png",
      description:
        "An interactive virtual drum kit that allows users to play different drum sounds using keyboard keys or on-screen buttons. Built with JavaScript event handling to create a responsive and engaging musical experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sarika25/Drum-Kit",
      live: "https://sarika25.github.io/Drum-Kit/",
    },
  ];

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-2">
            My Work
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A collection of projects I've built using modern web technologies,
            from frontend applications to full-stack AI-powered solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group flex flex-col rounded-2xl overflow-hidden border
                transition-all duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]
                ${
                  darkMode
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title + Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight mr-auto">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-yellow-500/50 text-yellow-500 whitespace-nowrap">
                      ★ Featured
                    </span>
                  )}

                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-500/50 text-blue-500 whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-5">
                  <p
                    className={`text-sm leading-6 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } ${!expanded[index] ? "line-clamp-3" : ""}`}
                  >
                    {project.description}
                  </p>

                  <button
                    onClick={() => toggleReadMore(index)}
                    className="mt-2 text-blue-500 text-xs font-bold hover:text-blue-400 transition-colors"
                  >
                    {expanded[index] ? "Show Less ⮝" : "Read More ⮟"}
                  </button>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1.5 text-xs rounded-full border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 text-gray-300"
                          : "bg-gray-100 border-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Links */}
                <div className="mt-auto flex gap-3 pt-4">
                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3
                      text-sm font-semibold rounded-lg text-white
                      bg-gray-700
                      hover:bg-gray-600
                      hover:scale-[1.03]
                      hover:shadow-[0_0_12px_rgba(107,114,128,0.35)]
                      transition-all duration-300
                      ${
                        project.github === "#"
                          ? "opacity-40 pointer-events-none"
                          : ""
                      }`}
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <FaGithub className="text-sm" />
                    <span>GitHub</span>
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3
                      text-sm font-semibold rounded-lg text-white
                      bg-linear-to-r from-blue-600 to-blue-500
                      hover:from-blue-700 hover:to-blue-600
                      hover:scale-[1.03]
                      hover:shadow-[0_0_12px_rgba(59,130,246,0.35)]
                      transition-all duration-300
                      ${
                        project.live === "#"
                          ? "opacity-40 pointer-events-none"
                          : ""
                      }`}
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
