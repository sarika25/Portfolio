const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`font-sans px-6 md:px-16 py-10 border-t transition-colors duration-300 ${
        darkMode
          ? "bg-gray-950 text-gray-300 border-gray-800"
          : "bg-gray-900 text-gray-300 border-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10">
          {/* Brand / Bio */}
          <div className="md:col-span-5 space-y-3">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Sarika<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              MERN Stack Developer focused on building clean, scalable, and
              user-friendly web applications using modern technologies.
            </p>

            <p className="text-blue-400 text-sm font-medium pt-1">
              Let's build something great together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200 mb-4">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-gray-400">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>

              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>

              <a
                href="#skills"
                className="hover:text-blue-400 transition-colors"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </a>

              <a
                href="#experience"
                className="hover:text-blue-400 transition-colors"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200">
              Connect
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Feel free to connect with me regarding software engineering
              opportunities, collaborations, or tech discussions.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href="https://github.com/sarika25"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs font-medium bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-700 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/khusarika"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs font-medium bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-700 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                LinkedIn
              </a>

              <a
                href="mailto:sarikabharti97@gmail.com"
                className="px-4 py-1.5 text-xs font-medium bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-700 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-2" />

        {/* Bottom Section */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Sarika Bharti. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
