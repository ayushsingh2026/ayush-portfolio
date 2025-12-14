
// Education Component
function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-gradient-to-b from-black via-[#050b1d] to-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3">EDUCATION</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
        <p className="text-center text-gray-400 mb-16">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <div className="flex-1 text-right pr-8">
                <div className="inline-block bg-[#0b1220] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex items-center gap-4 justify-end mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Bachelor of Technology - B.Tech (Computer Science)</h3>
                      <p className="text-blue-400 font-medium">Abes Institute of Technology, Ghaziabad</p>
                      <p className="text-gray-500 text-sm">Sept 2022 - July 2026</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-300">Grade: 7 CGPA</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Gained strong foundation in programming, software development, and computer science principles
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-[#050b1d] z-10 flex-shrink-0"></div>
              <div className="flex-1"></div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex-1"></div>
              <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-[#050b1d] z-10 flex-shrink-0"></div>
              <div className="flex-1 pl-8">
                <div className="inline-block bg-[#0b1220] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">CBSE(XII) - PCM with Computer Science</h3>
                      <p className="text-purple-400 font-medium">Range Hills Public School</p>
                      <p className="text-gray-500 text-sm">July 2020 - June 2021</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-300">Grade: 70%</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Completed undergraduate studies with focus on computer science fundamentals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
