import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "../context/ProgressContext";

export type View = "home" | "chapter" | "recipes" | "sobre";

interface NavbarProps {
  view: View;
  onNavigate: (v: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ view, onNavigate }) => {
  const { overallProgress } = useProgress();
  const [open, setOpen] = useState(false);

  const links: { label: string; value: View }[] = [
    { label: "Início", value: "home" },
    { label: "Capítulos", value: "home" },
    { label: "Receitas", value: "recipes" },
    { label: "Sobre mim", value: "sobre" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/75 border-b border-emerald-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 group"
        >
          <motion.span
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-md"
          >
            L
          </motion.span>
          <span className="font-serif text-lg sm:text-xl font-semibold text-emerald-900 tracking-tight">
            Leve & Real
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => onNavigate(link.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                view === link.value
                  ? "bg-emerald-500 text-white shadow"
                  : "text-emerald-800 hover:bg-emerald-50"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-24 h-2.5 bg-emerald-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <span className="text-xs font-semibold text-emerald-700">
              {overallProgress}%
            </span>
          </div>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-emerald-100 bg-white"
          >
            <div className="flex flex-col p-3 gap-1">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    onNavigate(link.value);
                    setOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-left text-sm font-medium ${
                    view === link.value
                      ? "bg-emerald-500 text-white"
                      : "text-emerald-800 hover:bg-emerald-50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="flex-1 h-2.5 bg-emerald-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-emerald-700">
                  {overallProgress}%
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
