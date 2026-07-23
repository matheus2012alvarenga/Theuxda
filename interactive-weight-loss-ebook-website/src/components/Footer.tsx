const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
            L
          </span>
          <span className="font-serif font-semibold">Leve & Real</span>
        </div>
        <p className="text-sm text-emerald-300/80 text-center">
          Feito com 💚 para acompanhar sua jornada de emagrecimento saudável.
          Não substitui consulta profissional individualizada.
        </p>
        <p className="text-xs text-emerald-400/60">
          © {new Date().getFullYear()} Leve & Real
        </p>
      </div>
    </footer>
  );
};

export default Footer;
