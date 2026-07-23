import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useProgress } from "../context/ProgressContext";

const FloatingProgress = () => {
  const { overallProgress } = useProgress();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (overallProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center"
          aria-label="Voltar ao topo"
        >
          <svg width="48" height="48" className="absolute -rotate-90">
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="#d1fae5"
              strokeWidth="4"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="#10b981"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xs font-bold text-emerald-700">
            {overallProgress}%
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingProgress;
