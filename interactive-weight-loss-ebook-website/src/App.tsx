import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProgressProvider } from "./context/ProgressContext";
import { chapters } from "./data/chapters";
import BackgroundBlobs from "./components/BackgroundBlobs";
import Navbar, { View } from "./components/Navbar";
import Home from "./components/Home";
import ChapterView from "./components/ChapterView";
import RecipesView from "./components/RecipesView";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import FloatingProgress from "./components/FloatingProgress";

function App() {
  const [view, setView] = useState<View>("home");
  const [activeChapterId, setActiveChapterId] = useState<string>(
    chapters[0].id
  );

  const handleSelectChapter = (id: string) => {
    setActiveChapterId(id);
    setView("chapter");
  };

  const handleNavigate = (v: View) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeChapter =
    chapters.find((c) => c.id === activeChapterId) ?? chapters[0];

  return (
    <ProgressProvider>
      <div className="min-h-screen bg-[#fbfaf6] text-emerald-950 font-sans selection:bg-emerald-200">
        <BackgroundBlobs />
        <Navbar view={view} onNavigate={handleNavigate} />

        <AnimatePresence mode="wait">
          <motion.main
            key={view === "chapter" ? `chapter-${activeChapterId}` : view}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {view === "home" && (
              <Home
                onSelectChapter={handleSelectChapter}
                onGoRecipes={() => handleNavigate("recipes")}
              />
            )}
            {view === "chapter" && (
              <ChapterView
                chapter={activeChapter}
                onSelectChapter={handleSelectChapter}
                onGoRecipes={() => handleNavigate("recipes")}
              />
            )}
            {view === "recipes" && <RecipesView />}
            {view === "sobre" && (
              <Sobre onSelectChapter={() => handleSelectChapter(chapters[0].id)} />
            )}
          </motion.main>
        </AnimatePresence>

        <Footer />
        <FloatingProgress />
      </div>
    </ProgressProvider>
  );
}

export default App;
