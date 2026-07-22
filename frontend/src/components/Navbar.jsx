import { FaCopy,FaDownload,FaSun,FaMoon } from "react-icons/fa";
function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`border-b transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="w-full px-10 py-5 flex justify-between items-center">

        <h1
          className={`text-3xl font-bold ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          AI Resume Generator
        </h1>

        <button
  onClick={() => setDarkMode(!darkMode)}
  className={`flex items-center gap-2 px-5 py-2.5 text-base font-medium rounded-full transition-all duration-300 hover:scale-105 ${
    darkMode
      ? "hover:bg-gray-700 text-black-300"
      : "hover:bg-gray-200 text-white-700"
  }`}
>
  {darkMode ? <FaSun size={30} /> : <FaMoon size={30} />}

</button>

      </div>
    </nav>
  );
}

export default Navbar;