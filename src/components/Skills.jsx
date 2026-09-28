import {
  Code2,
  Database,
  Server,
  GitBranch,
  Brain,
  Wrench,
} from "lucide-react";

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={24} />,
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "REST APIs",
        "JWT Authentication",
        "API Integration",
        "CRUD Operations",
      ],
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MongoDB", "MongoDB Atlas", "SQL", "NoSQL", "Database Design"],
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch size={24} />,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Docker",
        "Vercel",
        "Render",
      ],
    },
    {
      title: "AI & Development",
      icon: <Brain size={24} />,
      skills: [
        "Google Gemini",
        "AI Integration",
        "AI Recommendations",
        "ChatGPT",
        "Prompt Engineering",
      ],
    },
    {
      title: "Core Concepts",
      icon: <Wrench size={24} />,
      skills: [
        "Data Structures",
        "OOP",
        "DBMS",
        "Problem Solving",
        "Debugging",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen py-20 px-4 sm:px-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div data-aos="fade-up" className="text-center mb-12">
          <p className="text-blue-500 font-medium mb-2">My Skills</p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Technologies I <span className="text-blue-500">Work With</span>
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A collection of technologies and tools I use to build responsive,
            scalable, and modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "bg-gray-800/40 border-white/10 hover:border-blue-500/40"
                  : "bg-white border-gray-200 hover:border-blue-400"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-2 text-sm rounded-lg transition-colors duration-300 ${
                      darkMode
                        ? "bg-gray-700/70 text-gray-300 hover:bg-blue-500 hover:text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
