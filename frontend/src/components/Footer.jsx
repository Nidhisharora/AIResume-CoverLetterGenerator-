import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer({ darkMode }) {
  return (
    <footer
      className={`w-full border-t border-t transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-4">

        <p
          className={`text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} AI Resume Generator • Built with{" "}
          <FaHeart className="inline text-red-500 mx-1" />
          by <span className="font-semibold">Nidhish Arora</span>
        </p>

        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://github.com/Nidhisharora"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition hover:scale-110 ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/nidhisharora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;