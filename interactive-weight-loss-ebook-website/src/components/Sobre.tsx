import { motion } from "framer-motion";

interface SobreProps {
  onSelectChapter: () => void;
}

const Sobre: React.FC<SobreProps> = ({ onSelectChapter }) => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/nutricionista.jpg"
            alt="Nutricionista responsável pelo ebook"
            className="rounded-[2rem] shadow-xl w-full h-[420px] object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            👩‍⚕️ Sobre quem escreve para você
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-5">
            Olá, que bom ter você por aqui!
          </h1>
          <p className="text-emerald-900/80 leading-relaxed mb-4">
            Sou nutricionista e, ao longo dos anos de consultório, percebi que
            o que mais falta às pessoas não é força de vontade — é
            acolhimento e informação de qualidade, sem julgamentos.
          </p>
          <p className="text-emerald-900/80 leading-relaxed mb-4">
            Este ebook nasceu da vontade de colocar no papel tudo aquilo que
            converso com meus pacientes todos os dias: ciência traduzida em
            linguagem simples, receitas de verdade e muito carinho pelo seu
            processo, no seu tempo.
          </p>
          <p className="text-emerald-900/80 leading-relaxed mb-6">
            Lembre-se: cada corpo é único. Este material é um guia educativo
            e acolhedor, mas nada substitui o acompanhamento individualizado
            de um profissional. Se puder, busque suporte de um(a)
            nutricionista para um plano feito sob medida para você. 💚
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onSelectChapter}
            className="px-7 py-3.5 rounded-full bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-colors"
          >
            Começar a leitura →
          </motion.button>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { number: "10+", label: "anos estudando nutrição comportamental" },
          { number: "8", label: "capítulos completos e gratuitos" },
          { number: "15", label: "receitas proteicas e leves" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center bg-white rounded-3xl p-8 shadow-sm border border-emerald-50"
          >
            <p className="font-serif text-4xl font-bold text-emerald-500 mb-2">
              {stat.number}
            </p>
            <p className="text-sm text-emerald-900/70">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sobre;
