
  function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto bg-[#0b1220] border border-white/10 rounded-2xl p-10 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

        <p className="text-center text-gray-300 mb-8 leading-relaxed">
          I'm Tarun Kaushik, a Full Stack & MERN Developer with a Master's degree in
          Computer Applications. I enjoy building scalable applications and solving
          real-world problems through clean code and innovative solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Strengths</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Problem Solving & Analytical Thinking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Consistency & Dedication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Quick Learner & Adaptable</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Interests</h3>
            <p className="leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing
              to open source projects, and staying updated with the latest web
              development trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
