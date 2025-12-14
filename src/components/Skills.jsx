import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiSpringboot,
  SiMysql,
  SiFirebase,
  SiPostgresql,
  SiAngular,
  SiRedux,
  SiNextdotjs,
  SiSass,
  SiCplusplus,
  SiTypescript,
  SiNetlify,
  SiFigma,
  SiBootstrap,
  SiMui,

} from "react-icons/si";

/* ---------- SKILL PILL ---------- */
function SkillPill({ icon, name, color }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#0a0f1c]
      border border-white/10 text-gray-300 text-sm
      transition-all duration-300
      hover:border-blue-500 hover:text-white
      hover:shadow-lg hover:shadow-blue-500/20"
    >
      <span className="flex items-center justify-center w-6 h-6" style={{ color }}>
        {icon}
      </span>
      <span>{name}</span>
    </div>
  );
}

/* ---------- SKILL CARD ---------- */
function SkillCard({ title, skills }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative group rounded-2xl overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(
            400px circle at ${pos.x}px ${pos.y}px,
            rgba(59,130,246,0.18),
            transparent 60%
          )`,
        }}
      />

      <div className="relative rounded-2xl bg-[#0b1220] border border-white/10 p-8
        transition-all duration-300
        group-hover:border-blue-500/50
        group-hover:shadow-xl group-hover:shadow-blue-500/10"
      >
        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-200">
          {title}
        </h3>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, i) => (
            <SkillPill key={i} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- MAIN SKILLS SECTION ---------- */
export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-28 px-6 bg-gradient-to-b from-black via-[#050b1d] to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 text-white">
          SKILLS
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
        <p className="text-center text-gray-400 mb-16">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Frontend */}
          <SkillCard
            title="Frontend"
            skills={[
              { name: "HTML", icon: <FaHtml5 size={20} />, color: "#E34F26" },
              { name: "CSS", icon: <FaCss3Alt size={20} />, color: "#1572B6" },
              { name: "JavaScript", icon: <FaJs size={20} />, color: "#F7DF1E" },
              { name: "React JS", icon: <FaReact size={20} />, color: "#61DAFB" },
              { name: "Redux", icon: <SiRedux size={20} />, color: "#764ABC" },
              { name: "Next JS", icon: <SiNextdotjs size={20} />, color: "#ffffff" },
              { name: "Angular", icon: <SiAngular size={20} />, color: "#DD0031" },
              { name: "SASS", icon: <SiSass size={20} />, color: "#CC6699" },
              { name: "Tailwind CSS", icon: <SiTailwindcss size={20} />, color: "#38BDF8" },
              { name: "Bootstrap", icon: <SiBootstrap size={20} />, color: "#7952B3" },
              { name: "Material UI", icon: <SiMui size={20} />, color: "#007FFF" },
            ]}
          />

          {/* Backend */}
          <SkillCard
            title="Backend"
            skills={[
              { name: "Spring Boot", icon: <SiSpringboot size={20} />, color: "#6DB33F" },
              { name: "Node JS", icon: <FaNodeJs size={20} />, color: "#3C873A" },
              { name: "Express JS", icon: <SiExpress size={20} />, color: "#ffffff" },
              { name: "MySQL", icon: <SiMysql size={20} />, color: "#4479A1" },
              { name: "MongoDB", icon: <SiMongodb size={20} />, color: "#47A248" },
              { name: "Firebase", icon: <SiFirebase size={20} />, color: "#FFCA28" },
              { name: "PostgreSQL", icon: <SiPostgresql size={20} />, color: "#4169E1" },
            ]}
          />

          {/* Languages */}
          <SkillCard
            title="Languages"
            skills={[
              { name: "C", icon: <span className="font-bold">C</span>, color: "#A8B9CC" },
              { name: "C++", icon: <SiCplusplus size={20} />, color: "#00599C" },
              { name: "Java", icon: <FaJava size={20} />, color: "#007396" },
              { name: "Python", icon: <FaPython size={20} />, color: "#3776AB" },
              { name: "JavaScript", icon: <FaJs size={20} />, color: "#F7DF1E" },
              { name: "TypeScript", icon: <SiTypescript size={20} />, color: "#3178C6" },
            ]}
          />

          {/* Tools */}
          <SkillCard
            title="Tools"
            skills={[
              { name: "Git", icon: <FaGit size={20} />, color: "#F05032" },
              { name: "GitHub", icon: <FaGithub size={20} />, color: "#ffffff" },
             
              { name: "Postman", icon: <SiPostman size={20} />, color: "#FF6C37" },
              { name: "MongoDB Compass", icon: <SiMongodb size={20} />, color: "#00ED64" },
              { name: "Figma", icon: <SiFigma size={20} />, color: "#F24E1E" },
              { name: "Vercel", icon: <SiVercel size={20} />, color: "#ffffff" },
              { name: "Netlify", icon: <SiNetlify size={20} />, color: "#00C7B7" },
            ]}
          />

        </div>
      </div>
    </section>
  );
}
