import { useState } from "react";
import { motion } from "motion/react";
import { ExecutiveCV } from "./components/ExecutiveCV";
import { PortfolioWithEffects } from "./components/PortfolioWithEffects";
import { FileText, Briefcase } from "lucide-react";

type View = "cv" | "portfolio";
type Language = "de" | "en";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("cv");
  const [language, setLanguage] = useState<Language>("en");

  const content = {
    en: {
      cv: "CV",
      portfolio: "Portfolio",
    },
    de: {
      cv: "CV",
      portfolio: "Portfolio",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-black">
      {/* Main Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* View Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentView("cv")}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-bold flex items-center gap-2 ${
                currentView === "cv"
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-black shadow-lg shadow-cyan-500/50"
                  : "bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-500/50"
              }`}
            >
              <FileText className="w-5 h-5" />
              {t.cv}
            </button>
            <button
              onClick={() => setCurrentView("portfolio")}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-bold flex items-center gap-2 ${
                currentView === "portfolio"
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-black shadow-lg shadow-cyan-500/50"
                  : "bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-500/50"
              }`}
            >
              <Briefcase className="w-5 h-5" />
              {t.portfolio}
            </button>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-4 text-sm">
            <span className="font-medium text-gray-400">Language:</span>
            <button
              onClick={() => setLanguage("de")}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-mono font-bold ${
                language === "de"
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-black shadow-lg shadow-cyan-500/50"
                  : "bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:bg-gray-700/50 border border-gray-700"
              }`}
            >
              DE
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-mono font-bold ${
                language === "en"
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-black shadow-lg shadow-cyan-500/50"
                  : "bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:bg-gray-700/50 border border-gray-700"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Content Area with Top Padding */}
      <div className="pt-20">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentView === "cv" ? (
            <ExecutiveCV initialLanguage={language} onLanguageChange={setLanguage} />
          ) : (
            <PortfolioWithEffects language={language} />
          )}
        </motion.div>
      </div>
    </div>
  );
}