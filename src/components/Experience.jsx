import { Briefcase, Calendar } from "lucide-react";

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`min-h-screen py-16 px-4 sm:px-6 flex items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center mb-10"
        >
          <p className="text-blue-500 font-medium mb-2">My Journey</p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Work <span className="text-blue-500">Experience</span>
          </h2>
        </div>

        {/* Experience Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className={`max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl border hover:-translate-y-2 ${
            darkMode
              ? "bg-gray-800/40 border-white/10 hover:border-blue-500/40"
              : "bg-white border-gray-200 hover:border-blue-400"
          }`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                <Briefcase size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold">MERN Stack Developer</h3>

                <p className="text-blue-500 font-medium">Capgemini</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <Calendar size={16} />
              <span>Dec 2024 – May 2026</span>
            </div>
          </div>

          {/* Description */}
          <p
            className={`leading-7 mb-5 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Worked on application development, enhancement, integration,
            testing, debugging, and production support with a focus on modern
            web technologies.
          </p>

          {/* Key Points */}
          <ul
            className={`space-y-2 mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <li className="flex gap-3">
              <span className="text-blue-500">▹</span>
              Developed responsive and reusable UI components using React.js,
              JavaScript, HTML5, and CSS3.
            </li>

            <li className="flex gap-3">
              <span className="text-blue-500">▹</span>
              Integrated REST APIs and worked on application features,
              debugging, and issue resolution.
            </li>

            <li className="flex gap-3">
              <span className="text-blue-500">▹</span>
              Collaborated with teams throughout development, testing, and
              deployment cycles.
            </li>
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {[
              "React.js",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "Git",
            ].map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1.5 text-xs rounded-lg ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
