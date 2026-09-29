import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { FaSquarePhone } from "react-icons/fa6";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`px-4 sm:px-6 py-12 sm:py-14 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className="text-center mb-9"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-blue-500 font-semibold tracking-[0.2em] text-xs mb-2">
            LET'S CONNECT
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>

          <div className="w-16 h-1 bg-linear-to-r from-blue-600 to-blue-400 mx-auto mt-3 rounded-full"></div>

          <p
            className={`max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-6 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project, job opportunity, or collaboration in mind? Feel free
            to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Card */}
          <div
            className={`rounded-2xl border p-6 ${
              darkMode
                ? "bg-gray-900/70 border-gray-800"
                : "bg-white border-gray-200"
            }`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-bold mb-3">Let's talk</h3>

            <p
              className={`text-sm leading-6 mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I'm open to discussing new engineering opportunities, product
              ideas, and collaborations.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <FaEnvelope className="text-blue-500 text-sm" />
                  <span className="text-xs font-semibold text-gray-400">
                    EMAIL
                  </span>
                </div>

                <a
                  href="mailto:sarikabharti97@gmail.com"
                  className="text-sm font-medium hover:text-blue-400 transition-colors break-all underline decoration-1 underline-offset-4"
                >
                  sarikabharti97@gmail.com
                </a>
              </div>

              {/* PHONE */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <FaSquarePhone className="text-blue-500 text-sm" />
                  <span className="text-xs font-semibold text-gray-400">
                    PHONE
                  </span>
                </div>

                <a
                  href="tel:+916206375515"
                  className="text-sm font-medium hover:text-blue-400 transition-colors break-all underline decoration-1 underline-offset-4"
                >
                  +91-6206375515
                </a>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <FaMapMarkerAlt className="text-blue-500 text-sm" />
                  <span className="text-xs font-semibold text-gray-400">
                    LOCATION
                  </span>
                </div>

                <p className="text-sm font-medium">Pune, India</p>
              </div>

              {/* Availability */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <FaBriefcase className="text-blue-500 text-sm" />
                  <span className="text-xs font-semibold text-gray-400">
                    AVAILABLE FOR
                  </span>
                </div>

                <p className="text-sm font-semibold text-blue-400">
                  Full-Time Engineering Opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl border p-6 ${
              darkMode
                ? "bg-gray-900/70 border-gray-800"
                : "bg-white border-gray-200"
            }`}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-gray-400">
                  NAME
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={`w-full px-4 py-2.5 rounded-lg text-sm outline-none border transition-all ${
                    darkMode
                      ? "bg-gray-950 border-gray-700 text-white placeholder-gray-600 focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 text-gray-400">
                  EMAIL
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={`w-full px-4 py-2.5 rounded-lg text-sm outline-none border transition-all ${
                    darkMode
                      ? "bg-gray-950 border-gray-700 text-white placeholder-gray-600"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                  } focus:border-blue-500`}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-4">
              <label className="block text-xs font-semibold mb-1.5 text-gray-400">
                SUBJECT
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
                className={`w-full px-4 py-2.5 rounded-lg text-sm outline-none border transition-all ${
                  darkMode
                    ? "bg-gray-950 border-gray-700 text-white placeholder-gray-600 focus:border-blue-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                }`}
              />
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="block text-xs font-semibold mb-1.5 text-gray-400">
                MESSAGE
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                required
                className={`w-full px-4 py-2.5 rounded-lg text-sm outline-none border resize-none transition-all ${
                  darkMode
                    ? "bg-gray-950 border-gray-700 text-white placeholder-gray-600 focus:border-blue-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                }`}
              ></textarea>
            </div>

            {/* Status */}
            {status && (
              <p
                className={`mt-3 text-sm font-medium ${
                  status.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={sending}
              className="w-full mt-5 py-3 rounded-lg font-semibold text-white
              bg-linear-to-r from-blue-600 to-blue-400
              hover:from-blue-700 hover:to-blue-500
              hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
              hover:-translate-y-0.5
              transition-all duration-300
              disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
