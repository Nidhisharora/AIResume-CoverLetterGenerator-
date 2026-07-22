import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ResumeForm from "../components/ResumeForm";
import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";

import {
  FaMoon,
  FaSun,
  FaCopy,
  FaDownload,
  FaFileAlt,
  FaEnvelope,
  FaRocket,
  FaTools,

} from "react-icons/fa";

function Home() {

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultTitle, setResultTitle] = useState("Generated Result");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
  

      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="w-full px-10 py-12">

        <div className="text-center mb-12">
          <h1
            className={`text-6xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            
            AI Resume Generator
          </h1>

          <p
            className={`mt-4 text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Create ATS-Friendly Resume Content with Google Gemini AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <ResumeForm
            setResult={setResult}
            loading={loading}
            setLoading={setLoading}
            setResultTitle={setResultTitle}
            darkMode={darkMode}
          />

          <ResultCard
            result={result}
            loading={loading}
            resultTitle={resultTitle}
            darkMode={darkMode}
          />

        </div>
        <br></br>
        <br></br>
        <br></br>
          <Footer darkMode={darkMode} />

      </div>

    </div>
  );
}

export default Home;