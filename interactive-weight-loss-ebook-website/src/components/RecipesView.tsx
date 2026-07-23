import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { categories, recipes, RecipeCategory } from "../data/recipes";
import RecipeCard from "./RecipeCard";

const RecipesView = () => {
  const [activeCategory, setActiveCategory] = useState<RecipeCategory | "Todas">(
    "Todas"
  );

  const filtered = useMemo(() => {
    if (activeCategory === "Todas") return recipes;
    return recipes.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-28 pb-24 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-4">
          🍽️ Cardápio prático e proteico
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
          Receitas para emagrecer com sabor
        </h1>
        <p className="text-emerald-900/70 max-w-2xl mx-auto">
          Todas as receitas foram pensadas para serem ricas em proteína,
          leves em calorias e, principalmente, gostosas de comer. Nada de
          sofrimento à mesa — comida boa também emagrece.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {(["Todas", ...categories] as (RecipeCategory | "Todas")[]).map(
          (cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-emerald-500 text-white shadow-md"
                  : "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50"
              }`}
            >
              {cat}
            </motion.button>
          )
        )}
      </div>

      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((recipe, i) => (
          <RecipeCard recipe={recipe} index={i} key={recipe.id} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-3xl bg-emerald-50 border border-emerald-100 p-8 text-center"
      >
        <p className="font-serif text-lg text-emerald-900 max-w-2xl mx-auto">
          🌿 Todas as informações nutricionais são valores aproximados e
          podem variar conforme a marca dos ingredientes e o modo de preparo.
          Ajuste as porções conforme sua necessidade individual, sempre que
          possível com orientação de um(a) nutricionista.
        </p>
      </motion.div>
    </div>
  );
};

export default RecipesView;
