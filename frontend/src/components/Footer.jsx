import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#080a0c]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} AI Resume Generator • Built with{" "}
          <FaHeart className="inline text-red-500 mx-1" />
          by <span className="font-semibold text-white">Nidhish Arora</span>
        </p>

        <div className="flex items-center gap-5 text-xl">
          
          <a href="https://github.com/Nidhisharora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          
          <a  href="https://linkedin.com/in/nidhisharora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;