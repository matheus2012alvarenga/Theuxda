import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { chapters } from "../data/chapters";
import confetti from "canvas-confetti";

interface ProgressContextValue {
  checked: Record<string, boolean>;
  toggleItem: (chapterId: string, itemId: string) => void;
  chapterProgress: (chapterId: string) => number;
  overallProgress: number;
  visitedChapters: Record<string, boolean>;
  markVisited: (chapterId: string) => void;
}

const ProgressContext = createContext<ProgressContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "nutri-ebook-checklist";
const VISITED_KEY = "nutri-ebook-visited";

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const [visitedChapters, setVisitedChapters] = useState<
    Record<string, boolean>
  >(() => {
    try {
      const raw = localStorage.getItem(VISITED_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  useEffect(() => {
    localStorage.setItem(VISITED_KEY, JSON.stringify(visitedChapters));
  }, [visitedChapters]);

  const toggleItem = useCallback(
    (chapterId: string, itemId: string) => {
      setChecked((prev) => {
        const key = `${chapterId}:${itemId}`;
        const newChecked = { ...prev, [key]: !prev[key] };

        // Check if chapter just got fully completed
        const chapter = chapters.find((c) => c.id === chapterId);
        if (chapter) {
          const allDone = chapter.checklist.every(
            (item) => newChecked[`${chapterId}:${item.id}`]
          );
          if (allDone) {
            confetti({
              particleCount: 100,
              spread: 75,
              origin: { y: 0.6 },
              colors: ["#10b981", "#34d399", "#fbbf24", "#f472b6"],
            });
          }
        }
        return newChecked;
      });
    },
    []
  );

  const markVisited = useCallback((chapterId: string) => {
    setVisitedChapters((prev) => ({ ...prev, [chapterId]: true }));
  }, []);

  const chapterProgress = useCallback(
    (chapterId: string) => {
      const chapter = chapters.find((c) => c.id === chapterId);
      if (!chapter || chapter.checklist.length === 0) return 0;
      const done = chapter.checklist.filter(
        (item) => checked[`${chapterId}:${item.id}`]
      ).length;
      return Math.round((done / chapter.checklist.length) * 100);
    },
    [checked]
  );

  const overallProgress = useMemo(() => {
    const totalItems = chapters.reduce(
      (sum, c) => sum + c.checklist.length,
      0
    );
    const doneItems = chapters.reduce(
      (sum, c) =>
        sum +
        c.checklist.filter((item) => checked[`${c.id}:${item.id}`]).length,
      0
    );
    if (totalItems === 0) return 0;
    return Math.round((doneItems / totalItems) * 100);
  }, [checked]);

  return (
    <ProgressContext.Provider
      value={{
        checked,
        toggleItem,
        chapterProgress,
        overallProgress,
        visitedChapters,
        markVisited,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
};
