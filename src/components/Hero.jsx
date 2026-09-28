import { DownloadIcon, Mail } from "lucide-react";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    {
      icon: "/linkedin.webp",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/khusarika",
    },
    {
      icon: "/github.webp",
      alt: "GitHub",
      link: "https://github.com/sarika25",
    },
    {
      icon: "/gmail.webp",
      alt: "Gmail",
      link: "mailto:sarikabharti97@gmail.com",
    },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary: "text-white border-2 border-blue-500 hover:text-blue-500",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-900 border-2 border-blue-500 hover:text-blue-500",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10 w-full"
      >
        <div
          className="
            container mx-auto
            px-6 sm:px-8 lg:px-12
            pt-28 sm:pt-32 lg:pt-36
            pb-16 lg:pb-20
            flex flex-col lg:flex-row
            items-center
            justify-between
            gap-12 lg:gap-8
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full lg:w-[55%]
              flex flex-col
              items-center lg:items-start
              text-center lg:text-left
              lg:pl-12 xl:pl-20
            "
          >
            {/* Social Icons */}
            <div
              className="flex justify-center lg:justify-start gap-5 mb-7"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-12 h-12 sm:w-14 sm:h-14 object-contain ${
                      darkMode ? "" : "filter brightness-90"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1
              className={`
                title-font
                text-3xl sm:text-4xl md:text-5xl lg:text-5xl
                mb-5
                font-bold
                leading-tight
                ${theme.textPrimary}
              `}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm <span className="text-blue-500">Sarika Bharti</span>
            </h1>

            <h3
              className={`
                title-font
                text-lg sm:text-xl md:text-2xl lg:text-2xl
                mb-5
                font-bold
                leading-tight
                ${theme.textPrimary}
              `}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Analyst | MERN Stack Developer
            </h3>

            {/* Description */}
            <p
              className={`
                mb-8
                leading-relaxed
                text-base sm:text-lg
                max-w-xl
                text-clip
                ${theme.textSecondary}
              `}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              I'm passionate about building modern, responsive web applications.
              I turn ideas into clean, user-friendly, and scalable digital
              experiences. Currently exploring exciting opportunities to build
              and grow as a developer.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a href="/CV.pdf" download>
                <button
                  className="
                    inline-flex items-center justify-center
                    text-white
                    bg-linear-to-r from-blue-500 to-sky-400
                    border-0
                    py-3 px-7
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                    rounded-full
                    text-base sm:text-lg
                    font-semibold
                    transition-all duration-300
                    transform hover:scale-105
                  "
                >
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download CV
                </button>
              </a>

              <a href="#contact">
                <button
                  className={`
                    inline-flex items-center justify-center
                    ${theme.buttonSecondary}
                    py-3 px-7
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                    rounded-full
                    text-base sm:text-lg
                    font-semibold
                    transition-all duration-300
                    transform hover:scale-105
                  `}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              w-full lg:w-[45%]
              flex justify-center lg:justify-center
              mt-4 lg:mt-0
            "
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative flex justify-center items-center">
              <img
                src="/hero.png"
                alt="Sarika Bharti"
                className="
                  w-64 sm:w-72 md:w-80 lg:w-95
                  h-auto
                  object-contain
                  rounded-4xl
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
