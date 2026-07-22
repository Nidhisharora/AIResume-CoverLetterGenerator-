import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { FaFileAlt,FaEnvelope,FaRocket,FaTools } from "react-icons/fa";

function ResumeForm({  setResult, loading,setLoading,setResultTitle,darkMode }) {
    const [formData, setFormData] = useState({
      name: "",
      target_role: "",
      education: "",
      experience: "",
      skills: "",
      projects: "",
      achievements: "",
    }); 
    const handleChange = (e) => {
      const { name, value } = e.target; 
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const validateForm = () => {
      if (!formData.name.trim()) {
        toast.error("Please enter your full name.");
        return false;
      }
    
      if (!formData.target_role.trim()) {
        toast.error("Please enter your target role.");
        return false;
      }
    
      if (!formData.education.trim()) {
        toast.error("Please enter your education.");
        return false;
      }
    
      if (!formData.skills.trim()) {
        toast.error("Please enter your skills.");
        return false;
      }
    
      return true;
    };


    const buildRequestData = () => ({
      ...formData,
      skills: formData.skills.split(",").map(s => s.trim()).filter(Boolean),
      projects: formData.projects.split(",").map(p => p.trim()).filter(Boolean),
      achievements: formData.achievements.split(",").map(a => a.trim()).filter(Boolean),
    });

    const generateSummary = async () => {
        if (!validateForm()) return;
        setResult("");
        setLoading(true);   

        const requestData = buildRequestData();

        setResultTitle("📝 Resume Summary");
        try {   
          console.time("Generate Summary");
          const response = await api.post(
            "/generate-summary",
            requestData
          );   
          console.timeEnd("Generate Summary"); 
          toast.success("Resume summary generated!");
          setResult(response.data.summary); 
        
        } catch (error) {   
          console.error(error); 
          setResult("Failed to generate summary."); 
          toast.error("Failed to generate summary."); 
        
        } finally { 
          setLoading(false);    
        }
    };

    const generateCoverLetter = async () => {
      if (!validateForm()) return;
      setResult("");
      setLoading(true);   

        const requestData = buildRequestData(); 
        setResultTitle("💌 Cover Letter");

        try {   
          const response = await api.post(
            "/generate-cover-letter",
            requestData
          );   
          toast.success("Cover letter generated!"); 
          setResult(response.data.cover_letter);   
         
        } catch (error) {   
          console.error(error); 
          setResult("Failed to generate cover letter.");    
          toast.error("Failed to generate cover letter."); 

        } finally { 
          setLoading(false);    
        }
    };

    const improveProject = async () => {
      if (!formData.target_role.trim()) {
        toast.error("Please enter your target role.");
        return;
      }
      if (!formData.projects.trim()) {
        toast.error("Please enter your project.");
        return;
      }
      setResult("");
      setLoading(true); 
      setResultTitle("🚀 Improved Project");  

        try {   
          const response = await api.post(
            "/improve-project",
            {
              project: formData.projects,
              target_role: formData.target_role,
            }
          );    
          toast.success("Project description improved!");
          setResult(response.data.improved_project);  
          
        } catch (error) {   
          console.error(error); 
          setResult("Failed to improve project.");  
          toast.error("Failed to improve project.");  
        
        } finally { 
          setLoading(false);    
        }
    };


    const enhanceSkills = async () => {
      if (!validateForm()) return;
      setResult("");
      setResultTitle("⭐ Enhanced Skills");
      setLoading(true);   

        try {   
          const response = await api.post(
            "/enhance-skills",
            {
              skills: formData.skills
                .split(",")
                .map(skill => skill.trim())
                .filter(Boolean),   
              target_role: formData.target_role,
            }
          );   
          toast.success("Skills enhanced!"); 
          setResult(response.data.enhanced_skills); 

        } catch (error) {   
          console.error(error); 
          setResult("Failed to enhance skills.");   
          toast.error("Failed to enhance skills.");   

        } finally { 
          setLoading(false);    
        }
    };
    const inputClass = `
      w-full rounded-xl px-4 py-3.5 outline-none transition-all duration-300 hover:scale-105  duration-300
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      ${
        darkMode
          ? "bg-gray-800 border border-gray-600 text-white placeholder-gray-400"
          : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500"
      }
      `;

  return (
    <div className={`rounded-xl border shadow-xl p-8  -colors duration-300 ${
      darkMode
        ? "bg-gray-900 border-gray-700"
        : "bg-white border-gray-300"
    }`}>
      <h2 className={`text-4xl font-bold text-center mb-8 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}>
        Resume Details
      </h2>

      <form className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label
            className={`block font-medium mb-2 ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Target Role */}
        <div>
          <label className="block font-medium mb-2">
            Target Role
          </label>

          <input
            type="text"
            name="target_role"
            placeholder="Software Engineer"
            value={formData.target_role}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Education */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">
            Education
          </label>

          <textarea
            rows="3"
            name="education"
            placeholder="Enter your education..."
            value={formData.education}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Experience */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">
            Experience
          </label>

          <textarea
            rows="3"
            name="experience"
            placeholder="Enter your experience..."
            value={formData.experience}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Skills */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">
            Skills
          </label>

          <textarea
            rows="3"
            name="skills"
            placeholder="Java, Python, React, SQL..."
            value={formData.skills}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Projects */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">
            Projects
          </label>

          <textarea
            rows="3"
            name="projects"
            placeholder="Describe your projects..."
            value={formData.projects}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Achievements */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">
            Achievements
          </label>

          <textarea
            rows="3"
            name="achievements"
            placeholder="Your achievements..."
            value={formData.achievements}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Button */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4 mt-4">

            <button
              type="button"
              onClick={generateSummary}
              disabled={loading}
              className="bg-gradient-to-r from-blue-800 to-sky-700 text-white py-3.5 rounded-xl font-medium disabled:bg-gray-400"
            >
               Generate Summary
            </button>

            <button
              type="button"
              onClick={generateCoverLetter}
              disabled={loading}
              className="bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3.5 rounded-xl font-medium disabled:bg-gray-400"
            >
              Cover Letter
            </button>

            <button
              type="button"
              onClick={improveProject}
              disabled={loading}
              className="bg-gradient-to-r from-violet-800 to-indigo-600 text-white py-3.5 rounded-xl font-medium disabled:bg-gray-400"
            >
              Improve Project
            </button>

            <button
              type="button"
              onClick={enhanceSkills}
              disabled={loading}
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white py-3.5 rounded-xl font-medium disabled:bg-gray-400"
            >
              Enhance Skills
            </button>

        </div>
      </form>
    </div>
  );
}

export default ResumeForm;