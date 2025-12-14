import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Developer",
  "UI/UX Designer",
  "Coder",
];

// Hero Component
function Hero() {
  const roles = ["Full Stack Developer", "MERN Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex % roles.length];
    const timer = setTimeout(
      () => {
        setText(
          isDeleting
            ? role.substring(0, text.length - 1)
            : role.substring(0, text.length + 1)
        );

        if (!isDeleting && text === role) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
        if (isDeleting && text === "") {
          setIsDeleting(false);
          setRoleIndex(roleIndex + 1);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Hi, I am <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ayush Singh
            </span>
          </h1>

          <h2 className="text-2xl mb-6 text-gray-300">
            I am a <span className="text-purple-400">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I build scalable and modern web applications using MERN stack with
            clean UI and strong backend logic. Passionate about creating
            seamless user experiences.
          </p>

          <a
            href="#"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            Download CV
          </a>
        </div>

        <div className="flex justify-center">
          <div
            className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500
    shadow-[0_0_60px_rgba(168,85,247,0.4)]
    hover:shadow-[0_0_80px_rgba(168,85,247,0.6)]
    transition-all duration-300"
          >
            <img
              src="/profile.jpg"
              alt="Ayush Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
