import { useState, useEffect } from "react";

import { Github, Linkedin, Menu, X } from "lucide-react";

// Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0f1c]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <span className="text-blue-400">&lt;</span>
          Ayush
          <span className="text-gray-400">/</span>
          Singh
          <span className="text-blue-400">&gt;</span>
        </h1>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {["About", "Skills", "Experience", "Projects", "Education"].map(i => (
            <li key={i}>
              <a href={`#${i.toLowerCase()}`} className="hover:text-white transition">
                {i}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4 text-gray-300">
          <a href="#" className="hover:text-white transition">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0f1c] border-t border-white/10">
          <ul className="flex flex-col gap-4 p-6 text-gray-300">
            {["About", "Skills", "Experience", "Projects", "Education"].map(i => (
              <li key={i}>
                <a href={`#${i.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;