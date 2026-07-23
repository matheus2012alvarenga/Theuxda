import { useEffect } from "react";
import { motion } from "framer-motion";
import { Chapter, chapters } from "../data/chapters";
import Checklist from "./Checklist";
import { useProgress } from "../context/ProgressContext";

interface ChapterViewProps {
  chapter: Chapter;
  onSelectChapter: (id: string) => void;
  onGoRecipes: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  onSelectChapter,
  onGoRecipes,
}) => {
  const { markVisited } = useProgress();
  const currentIndex = chapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = chapters[currentIndex - 1];
  const nextChapter = chapters[currentIndex + 1];

  useEffect(() => {
    markVisited(chapter.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [chapter.id, markVisited]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 pt-28">
      {/* Hero */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="relative rounded-[2rem] overflow-hidden mb-10 shadow-xl"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${chapter.color} opacity-70`}
        />
        <img
          src={chapter.heroImage}
          alt={chapter.title}
          className="w-full h-64 sm:h-80 object-cover mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent">
          <span className="text-white/90 text-sm font-medium mb-2">
            Capítulo {chapter.number} · {chapter.readTime}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1 drop-shadow">
            {chapter.title}
          </h1>
          <p className="text-white/90 text-base sm:text-lg italic">
            {chapter.subtitle}
          </p>
        </div>
      </motion.div>

      {/* Intro */}
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="text-lg sm:text-xl text-emerald-950/80 leading-relaxed font-serif italic mb-12 border-l-4 border-emerald-300 pl-5"
      >
        {chapter.intro}
      </motion.p>

      {/* Sections */}
      <div className="space-y-14">
        {chapter.sections.map((section, i) => (
          <motion.section
            key={section.heading}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-emerald-900 mb-3 flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold flex items-center justify-center mt-1">
                {i + 1}
              </span>
              {section.heading}
            </h3>
            <p className="text-emerald-900/80 leading-relaxed text-base sm:text-lg pl-11">
              {section.body}
            </p>

            {/* insert second image after first section if exists */}
            {i === 0 && chapter.images[1] && (
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                src={chapter.images[1]}
                alt={section.heading}
                className="mt-6 ml-11 w-[calc(100%-2.75rem)] rounded-2xl shadow-lg object-cover h-56 sm:h-72"
              />
            )}
          </motion.section>
        ))}
      </div>

      {/* Tips box */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="my-14 rounded-3xl bg-amber-50 border border-amber-200 p-6 sm:p-8"
      >
        <h4 className="font-serif text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">💡</span> Dicas da nutricionista
        </h4>
        <ul className="space-y-3">
          {chapter.tips.map((tip, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 text-amber-900/90"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-300 text-amber-900 text-xs font-bold flex items-center justify-center mt-0.5">
                ★
              </span>
              <span>{tip}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Checklist */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <Checklist chapterId={chapter.id} items={chapter.checklist} />
      </motion.div>

      {/* Recipe CTA */}
      <motion.button
        onClick={onGoRecipes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-10 w-full rounded-3xl bg-gradient-to-r from-rose-400 to-orange-400 text-white p-6 sm:p-8 text-left shadow-lg flex items-center justify-between gap-4 flex-wrap"
      >
        <div>
          <p className="font-serif text-xl font-semibold mb-1">
            Quer colocar este capítulo em prática na cozinha? 🍽️
          </p>
          <p className="text-white/90 text-sm sm:text-base">
            Confira receitas proteicas e leves para todos os momentos do dia.
          </p>
        </div>
        <span className="bg-white text-orange-500 rounded-full px-5 py-2.5 font-semibold text-sm whitespace-nowrap">
          Ver receitas →
        </span>
      </motion.button>

      {/* Navigation between chapters */}
      <div className="mt-14 flex items-center justify-between gap-4 flex-wrap">
        {prevChapter ? (
          <motion.button
            whileHover={{ x: -4 }}
            onClick={() => onSelectChapter(prevChapter.id)}
            className="flex-1 min-w-[220px] text-left p-5 rounded-2xl border border-emerald-200 hover:bg-emerald-50 transition-colors"
          >
            <span className="text-xs text-emerald-600 font-medium">
              ← Capítulo anterior
            </span>
            <p className="font-serif font-semibold text-emerald-900 mt-1">
              {prevChapter.title}
            </p>
          </motion.button>
        ) : (
          <div className="flex-1 min-w-[220px]" />
        )}
        {nextChapter ? (
          <motion.button
            whileHover={{ x: 4 }}
            onClick={() => onSelectChapter(nextChapter.id)}
            className="flex-1 min-w-[220px] text-right p-5 rounded-2xl border border-emerald-200 hover:bg-emerald-50 transition-colors"
          >
            <span className="text-xs text-emerald-600 font-medium">
              Próximo capítulo →
            </span>
            <p className="font-serif font-semibold text-emerald-900 mt-1">
              {nextChapter.title}
            </p>
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={onGoRecipes}
            className="flex-1 min-w-[220px] text-right p-5 rounded-2xl bg-emerald-500 text-white transition-colors"
          >
            <span className="text-xs text-white/80 font-medium">
              Você concluiu o ebook! 🎉
            </span>
            <p className="font-serif font-semibold mt-1">
              Explorar receitas →
            </p>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ChapterView;
