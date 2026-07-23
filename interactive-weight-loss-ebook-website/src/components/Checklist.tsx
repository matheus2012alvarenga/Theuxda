import { motion } from "framer-motion";
import { ChecklistItem } from "../data/chapters";
import { useProgress } from "../context/ProgressContext";

interface ChecklistProps {
  chapterId: string;
  items: ChecklistItem[];
}

const Checklist: React.FC<ChecklistProps> = ({ chapterId, items }) => {
  const { checked, toggleItem, chapterProgress } = useProgress();
  const progress = chapterProgress(chapterId);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
        <h4 className="font-serif text-xl font-semibold text-emerald-900 flex items-center gap-2">
          <span className="text-2xl">✅</span> Checklist deste capítulo
        </h4>
        <div className="flex items-center gap-2">
          <div className="w-28 h-2.5 bg-white rounded-full overflow-hidden border border-emerald-200">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="text-sm font-bold text-emerald-700">{progress}%</span>
        </div>
      </div>
      <p className="text-sm text-emerald-800/70 mb-5">
        Marque os itens conforme for praticando ao longo do dia. Seu progresso fica salvo automaticamente. 💚
      </p>
      <ul className="space-y-3">
        {items.map((item, i) => {
          const key = `${chapterId}:${item.id}`;
          const isChecked = !!checked[key];
          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => toggleItem(chapterId, item.id)}
                className={`w-full flex items-center gap-3 text-left p-3.5 rounded-2xl border transition-all ${
                  isChecked
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-md"
                    : "bg-white border-emerald-100 text-emerald-900 hover:border-emerald-300"
                }`}
              >
                <motion.span
                  animate={isChecked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                    isChecked
                      ? "bg-white border-white text-emerald-500"
                      : "border-emerald-300 text-transparent"
                  }`}
                >
                  ✓
                </motion.span>
                <span
                  className={`text-sm sm:text-base ${
                    isChecked ? "line-through opacity-90" : ""
                  }`}
                >
                  {item.text}
                </span>
              </button>
            </motion.li>
          );
        })}
      </ul>
      {progress === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 p-4 rounded-2xl bg-emerald-500 text-white text-center font-medium"
        >
          🎉 Uau, você concluiu este capítulo! Estou muito orgulhosa de você.
        </motion.div>
      )}
    </div>
  );
};

export default Checklist;
