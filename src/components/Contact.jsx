import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setFormData({ email: "", name: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-28 px-6 bg-gradient-to-b from-black via-[#050b1d] to-black"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-3 text-white">
          CONTACT
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
        <p className="text-center text-gray-400 mb-16">
          I'd love to hear from you — reach out for opportunities or questions
        </p>

        {/* Contact Card */}
        <div className="max-w-xl mx-auto relative group">
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
            bg-[radial-gradient(400px_circle_at_50%_0%,rgba(168,85,247,0.2),transparent_70%)]"
          />

          <form
            onSubmit={handleSubmit}
            className="relative bg-[#0b1220] border border-white/10 rounded-2xl p-8
              transition-all duration-300
              group-hover:border-purple-500/40
              group-hover:shadow-xl group-hover:shadow-purple-500/20"
          >
            <h3 className="text-2xl font-semibold text-center mb-2 text-white">
              Connect With Me 🚀
            </h3>
            <p className="text-center text-gray-400 mb-8">
              Let’s discuss your project or just say hi!
            </p>

            <div className="space-y-4">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-lg bg-[#0a0f1c]
                  border border-white/10 text-gray-300 placeholder-gray-500
                  focus:outline-none focus:border-purple-500 transition"
              />

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-lg bg-[#0a0f1c]
                  border border-white/10 text-gray-300 placeholder-gray-500
                  focus:outline-none focus:border-purple-500 transition"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-5 py-4 rounded-lg bg-[#0a0f1c]
                  border border-white/10 text-gray-300 placeholder-gray-500
                  focus:outline-none focus:border-purple-500 transition"
              />

              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                className="w-full px-5 py-4 rounded-lg bg-[#0a0f1c]
                  border border-white/10 text-gray-300 placeholder-gray-500
                  focus:outline-none focus:border-purple-500 transition resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-lg
                  bg-gradient-to-r from-purple-600 to-pink-500
                  text-white font-semibold
                  hover:shadow-lg hover:shadow-purple-500/40
                  transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
