import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Recipe } from "../data/recipes";

const categoryStyles: Record<string, string> = {
  "Café da Manhã": "bg-amber-100 text-amber-700",
  Shakes: "bg-sky-100 text-sky-700",
  Almoço: "bg-emerald-100 text-emerald-700",
  Jantar: "bg-indigo-100 text-indigo-700",
  Sobremesas: "bg-rose-100 text-rose-700",
};

const RecipeCard: React.FC<{ recipe: Recipe; index: number }> = ({
  recipe,
  index,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 6) * 0.06, duration: 0.4 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-emerald-50 hover:shadow-lg transition-shadow"
    >
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
            categoryStyles[recipe.category]
          }`}
        >
          {recipe.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold text-emerald-950 mb-2 leading-snug">
          {recipe.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="flex items-center gap-1 text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">
            🔥 {recipe.calories} kcal
          </span>
          <span className="flex items-center gap-1 text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">
            💪 {recipe.protein}g proteína
          </span>
          <span className="flex items-center gap-1 text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">
            ⏱️ {recipe.time}
          </span>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="w-full text-sm font-semibold text-emerald-600 border border-emerald-200 rounded-full py-2.5 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1"
        >
          {open ? "Ocultar receita" : "Ver receita completa"}
          <motion.span animate={{ rotate: open ? 180 : 0 }}>▾</motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <p className="text-xs font-semibold text-emerald-700 mb-1">
                  Rende: {recipe.servings}
                </p>
                <h4 className="text-sm font-bold text-emerald-900 mt-3 mb-2">
                  Ingredientes
                </h4>
                <ul className="space-y-1.5 mb-4">
                  {recipe.ingredients.map((ing, i) => (
                    <li
                      key={i}
                      className="text-sm text-emerald-900/80 flex items-start gap-2"
                    >
                      <span className="text-emerald-400 mt-0.5">•</span>
                      {ing}
                    </li>
                  ))}
                </ul>
                <h4 className="text-sm font-bold text-emerald-900 mb-2">
                  Modo de preparo
                </h4>
                <ol className="space-y-2 mb-4">
                  {recipe.steps.map((step, i) => (
                    <li
                      key={i}
                      className="text-sm text-emerald-900/80 flex items-start gap-2"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-800">
                  <strong>💡 Dica da nutri:</strong> {recipe.tip}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
