import { motion } from "framer-motion";
import { chapters } from "../data/chapters";
import { useProgress } from "../context/ProgressContext";

interface HomeProps {
  onSelectChapter: (id: string) => void;
  onGoRecipes: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Home: React.FC<HomeProps> = ({ onSelectChapter, onGoRecipes }) => {
  const { chapterProgress, overallProgress } = useProgress();

  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-5">
            🌱 Um ebook interativo, feito com carinho
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-950 leading-tight mb-6">
            Emagrecer com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              leveza
            </span>
            , de verdade.
          </h1>
          <p className="text-lg text-emerald-900/75 leading-relaxed mb-8">
            Sou nutricionista e escrevi este guia pensando em você: sem
            fórmulas mágicas, sem dietas restritivas, sem culpa. Apenas
            conhecimento de verdade, receitas gostosas e hábitos que cabem na
            sua vida. Vamos juntas(os) nessa jornada?
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectChapter(chapters[0].id)}
              className="px-7 py-3.5 rounded-full bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-colors"
            >
              Começar a leitura →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onGoRecipes}
              className="px-7 py-3.5 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors"
            >
              Ver receitas 🍽️
            </motion.button>
          </div>

          {overallProgress > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex-1 max-w-xs h-2.5 bg-emerald-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${overallProgress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-emerald-700">
                {overallProgress}% da jornada concluída
              </span>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img
              src="/images/cover-hero.jpg"
              alt="Capa do ebook Leve & Real"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3"
          >
            <span className="text-3xl">📖</span>
            <div>
              <p className="font-serif font-bold text-emerald-900 leading-none">
                8 capítulos
              </p>
              <p className="text-xs text-emerald-700/70">+ receitas exclusivas</p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
          >
            <span className="text-2xl">✅</span>
            <p className="text-xs font-medium text-emerald-800">
              Checklists práticos
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🥗",
              title: "Baseado em ciência",
              text: "Conteúdo fundamentado em nutrição comportamental, sem modismos ou promessas milagrosas.",
            },
            {
              icon: "💬",
              title: "Tom acolhedor",
              text: "Escrito como uma conversa entre amigas(os), sem julgamentos, no seu tempo.",
            },
            {
              icon: "📋",
              title: "Prático no dia a dia",
              text: "Checklists e receitas simples para aplicar o conhecimento na vida real, hoje mesmo.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-50"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="font-serif text-lg font-semibold text-emerald-900 mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-emerald-900/70 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-3">
            Sumário do ebook
          </h2>
          <p className="text-emerald-900/70 max-w-xl mx-auto">
            Clique em qualquer capítulo para começar. Você pode ler na ordem
            que preferir — este guia é seu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {chapters.map((chapter, i) => {
            const progress = chapterProgress(chapter.id);
            return (
              <motion.button
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectChapter(chapter.id)}
                className="relative text-left rounded-3xl overflow-hidden shadow-md group"
              >
                <img
                  src={chapter.heroImage}
                  alt={chapter.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${chapter.color} opacity-80 mix-blend-multiply`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative p-6 min-h-[160px] flex flex-col justify-end">
                  <span className="text-white/80 text-xs font-semibold mb-1">
                    CAPÍTULO {chapter.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {chapter.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-white text-xs font-bold">
                      {progress}%
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 sm:p-12 text-center shadow-xl"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Pronto(a) para começar a transformar sua relação com a comida?
          </h2>
          <p className="text-emerald-50/90 mb-7 max-w-lg mx-auto">
            Cada capítulo é um passo. Cada checklist, uma vitória. Vamos
            juntas(os)?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelectChapter(chapters[0].id)}
            className="px-8 py-3.5 rounded-full bg-white text-emerald-700 font-semibold shadow-lg"
          >
            Ler o Capítulo 1 →
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
