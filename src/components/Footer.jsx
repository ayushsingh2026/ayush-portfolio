import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#0a0f1c] border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Name */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ayush Singh
          </h3>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-8 mb-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#education" className="hover:text-white transition">Education</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition">
            <FaFacebook size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-400 transition">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-700 transition">
            <FaLinkedin size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 transition">
            <FaYoutube size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 Ayush Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
