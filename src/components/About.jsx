const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Image / Code Window */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative flex justify-center items-center">
            <div
              className={`w-85 sm:w-95 lg:w-100 aspect-square rounded-2xl p-5 sm:p-6 backdrop-blur-xl border shadow-[0_8px_40px_rgba(0,0,0,0.25)] ${
                darkMode
                  ? "bg-gray-800/30 border-white/10"
                  : "bg-white/60 border-gray-200"
              }`}
            >
              {/* Window dots */}
              <div className="mb-5 flex gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
              </div>

              {/* Image */}
              <div className="h-[calc(100%-28px)] w-full flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src="/about_2.png"
                  alt="Sarika Bharti"
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </figure>

        {/* About Content */}
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>
          <div
            className="bg-linear-to-r from-blue-900/10 to-blue-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p
              className={`text-base sm:text-lg leading-7 mb-5 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm a MERN Stack Developer with 1.5+ years of professional
              experience at Capgemini, focused on building responsive,
              user-friendly, and scalable web applications.
            </p>

            <p
              className={`text-base leading-7 mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I enjoy working with React.js, JavaScript, Node.js, Express.js,
              and MongoDB to turn ideas into practical applications. I'm also
              exploring AI-powered features and modern development practices to
              build smarter and more engaging user experiences.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-center gap-4 sm:gap-40 lg:gap-24 mb-6 sm:mb-8 sm:mt-6 mt-4">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400">
                1.5+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Years Experience
              </div>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400">
                10+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Technologies
              </div>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400">
                ♾️
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Curiosity to Learn
              </div>
            </div>
          </div>
          <a href="#skills">
            <button
              className={`inline-flex items-center justify-center py-2 px-4 sm:px-6 border-2 border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${darkMode ? "text-white bg-blue-500/10" : "text-gray-800 bg-white/90"}`}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Explore My Skills
            </button>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
