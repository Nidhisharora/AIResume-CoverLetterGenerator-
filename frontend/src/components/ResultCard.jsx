import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";
import { FaCopy,FaDownload } from "react-icons/fa";

function ResultCard({ result, loading, resultTitle,darkMode }) {
  const handleCopy = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      toast.success("Copied to clipboard!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy.");
    }
  };

    const handleDownload = () => {
        if (!result) return;

        const doc = new jsPDF();

        const fileName = (resultTitle || "generated-result")
          .replace(/[^\w\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-")
          .toLowerCase();

        // Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text(resultTitle || "Generated Result", 15, 20);

        // Body
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const lines = doc.splitTextToSize(result, 180);

        doc.text(lines, 15, 35);

        doc.save(`${fileName}.pdf`);

        toast.success("PDF downloaded successfully!");
    };

  return (
    <div className={`rounded-2xl border shadow-xl p-8 transition-colors duration-300 ${
    darkMode
        ? "bg-gray-900 border-gray-700"
        : "bg-white border-gray-200"
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <span>{resultTitle || "Generated Result"}</span>
        </h2>

        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            disabled={!result}
            className="flex items-center gap-3 px-4 py-2 hover:scale-105 transition-all duration-300 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaCopy /> Copy
          </button>

          <button
            onClick={handleDownload}
            disabled={!result}
            className="px-4 py-2 text-sm font-medium border hover:scale-105 transition-all duration-300 border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <FaDownload/> Download
          </button>
        </div>
      </div>

      {/* Result Area */}
      <div className={`h-[450px] overflow-y-auto rounded-2xl p-6 ${
    darkMode
        ? "bg-gray-800"
        : "bg-gray-50"
    }`}>
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"></div>
              <div className="w-3 h-3 rounded-full bg-blue-600 animate-bounce [animation-delay:0.15s]"></div>
              <div className="w-3 h-3 rounded-full bg-blue-600 animate-bounce [animation-delay:0.3s]"></div>
            </div>

            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Gemini is generating your content...
            </p>
          </div>
        ) : result ? (
        <div className={`prose max-w-none ${
            darkMode ? "prose-invert" : "prose-blue"
            }`}
        >
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        ) : (
          <div className={`flex items-center justify-center h-full text-center ${
            darkMode
                ? "text-gray-400"
                : "text-gray-500"
        }`}>
            Your generated content will appear here.
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultCard;