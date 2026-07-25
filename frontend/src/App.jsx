import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResumeSummary from "./pages/ResumeSummary";
import CoverLetter from "./pages/CoverLetter";
import ProjectImprover from "./pages/ProjectImprover";
import SkillEnhancer from "./pages/SkillEnhancer";
import BackgroundGrid from "./components/BackgroundGrid";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col text-white">
        <BackgroundGrid />

        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume-summary" element={<ResumeSummary />} />
            <Route path="/cover-letter" element={<CoverLetter />} />
            <Route path="/project-improver" element={<ProjectImprover />} />
            <Route path="/skill-enhancer" element={<SkillEnhancer />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}