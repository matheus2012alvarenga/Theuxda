export type RecipeCategory =
  | "Café da Manhã"
  | "Shakes"
  | "Almoço"
  | "Jantar"
  | "Sobremesas";

export interface Recipe {
  id: string;
  category: RecipeCategory;
  title: string;
  image: string;
  calories: number;
  protein: number;
  time: string;
  servings: string;
  ingredients: string[];
  steps: string[];
  tip: string;
}

export const categories: RecipeCategory[] = [
  "Café da Manhã",
  "Shakes",
  "Almoço",
  "Jantar",
  "Sobremesas",
];

export const recipes: Recipe[] = [
  // CAFÉ DA MANHÃ
  {
    id: "aveia-proteica",
    category: "Café da Manhã",
    title: "Aveia proteica com frutas vermelhas",
    image:
      "https://images.pexels.com/photos/11394964/pexels-photo-11394964.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 280,
    protein: 22,
    time: "5 min",
    servings: "1 porção",
    ingredients: [
      "1/2 xícara de aveia em flocos",
      "1 scoop de whey protein sabor baunilha (ou 2 col. de sopa de iogurte grego extra)",
      "150ml de leite desnatado ou vegetal",
      "1/2 xícara de frutas vermelhas (morango, mirtilo)",
      "1 col. de chá de canela",
    ],
    steps: [
      "Misture a aveia com o leite e deixe hidratar por 3-5 minutos.",
      "Adicione o whey protein e misture bem até incorporar.",
      "Finalize com as frutas vermelhas e a canela por cima.",
      "Sirva na hora, morno ou gelado.",
    ],
    tip: "Prepare na noite anterior (overnight oats) para ganhar tempo pela manhã.",
  },
  {
    id: "panqueca-proteica",
    category: "Café da Manhã",
    title: "Panqueca de banana e ovo",
    image:
      "https://images.pexels.com/photos/7535151/pexels-photo-7535151.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 240,
    protein: 18,
    time: "10 min",
    servings: "1 porção (2 panquecas)",
    ingredients: [
      "1 banana madura amassada",
      "2 ovos",
      "2 col. de sopa de aveia em flocos",
      "1 pitada de canela",
      "Óleo de coco para untar (opcional)",
    ],
    steps: [
      "Amasse a banana até formar um purê.",
      "Misture os ovos, a aveia e a canela até formar uma massa homogênea.",
      "Aqueça uma frigideira antiaderente e despeje pequenas porções da massa.",
      "Doure dos dois lados em fogo baixo, por cerca de 2 minutos cada.",
    ],
    tip: "Sirva com uma colher de pasta de amendoim integral para mais proteína e sabor.",
  },
  {
    id: "torrada-abacate-ovo",
    category: "Café da Manhã",
    title: "Torrada integral com abacate e ovo poché",
    image:
      "https://images.pexels.com/photos/4112348/pexels-photo-4112348.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 260,
    protein: 14,
    time: "10 min",
    servings: "1 porção",
    ingredients: [
      "1 fatia de pão integral ou de fermentação natural",
      "1/4 de abacate amassado",
      "1 ovo",
      "Suco de limão, sal e pimenta a gosto",
      "Flocos de pimenta calabresa (opcional)",
    ],
    steps: [
      "Toste a fatia de pão até dourar levemente.",
      "Amasse o abacate com limão, sal e pimenta e espalhe sobre a torrada.",
      "Cozinhe o ovo em água fervente com um fio de vinagre por 3 minutos para o ponto poché.",
      "Coloque o ovo sobre a torrada e finalize com pimenta calabresa.",
    ],
    tip: "Troque o pão por uma fatia de batata-doce assada para uma versão sem glúten.",
  },

  // SHAKES
  {
    id: "shake-morango",
    category: "Shakes",
    title: "Shake proteico de morango",
    image:
      "https://images.pexels.com/photos/845552/pexels-photo-845552.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 190,
    protein: 25,
    time: "5 min",
    servings: "1 copo grande",
    ingredients: [
      "1 scoop de whey protein (ou 2 col. de proteína vegetal)",
      "1 xícara de morangos congelados",
      "200ml de leite desnatado ou bebida vegetal",
      "Gelo a gosto",
    ],
    steps: [
      "Coloque todos os ingredientes no liquidificador.",
      "Bata até obter uma textura cremosa e homogênea.",
      "Sirva imediatamente, bem gelado.",
    ],
    tip: "Ótimo para o pós-treino: repõe proteína e ainda mata a vontade de doce.",
  },
  {
    id: "shake-verde-detox",
    category: "Shakes",
    title: "Shake verde proteico",
    image:
      "https://images.pexels.com/photos/4378601/pexels-photo-4378601.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 170,
    protein: 20,
    time: "5 min",
    servings: "1 copo grande",
    ingredients: [
      "1 folha grande de couve sem o talo",
      "1/2 maçã verde",
      "1 scoop de whey ou proteína vegetal sabor baunilha",
      "200ml de água de coco",
      "Gelo a gosto",
    ],
    steps: [
      "Bata a couve com a água de coco primeiro, até ficar bem líquido.",
      "Adicione a maçã e a proteína e bata novamente.",
      "Acrescente gelo e bata mais uma vez até a consistência desejada.",
    ],
    tip: "Beba em até 15 minutos após o preparo para preservar os nutrientes das folhas.",
  },
  {
    id: "shake-cacau-banana",
    category: "Shakes",
    title: "Shake de cacau com banana",
    image:
      "https://images.pexels.com/photos/7937485/pexels-photo-7937485.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 210,
    protein: 23,
    time: "5 min",
    servings: "1 copo grande",
    ingredients: [
      "1 banana congelada",
      "1 col. de sopa de cacau em pó 100%",
      "1 scoop de whey protein sabor chocolate",
      "200ml de leite desnatado ou vegetal",
    ],
    steps: [
      "Congele a banana em rodelas com antecedência.",
      "Bata todos os ingredientes no liquidificador até ficar cremoso.",
      "Sirva imediatamente — a consistência lembra um milk-shake.",
    ],
    tip: "Perfeito para matar a vontade de chocolate de forma equilibrada e proteica.",
  },

  // ALMOÇO
  {
    id: "frango-grelhado-salada",
    category: "Almoço",
    title: "Frango grelhado com salada colorida",
    image:
      "https://images.pexels.com/photos/27969847/pexels-photo-27969847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 340,
    protein: 38,
    time: "25 min",
    servings: "1 porção",
    ingredients: [
      "150g de filé de frango",
      "Mix de folhas verdes",
      "1/2 tomate picado",
      "1/4 de pepino em rodelas",
      "1 col. de sopa de azeite de oliva",
      "Limão, sal e ervas a gosto",
    ],
    steps: [
      "Tempere o frango com limão, sal e ervas e deixe descansar 10 minutos.",
      "Grelhe em frigideira antiaderente até dourar dos dois lados e cozinhar por completo.",
      "Monte a salada com as folhas, tomate e pepino.",
      "Corte o frango em tiras, disponha sobre a salada e regue com azeite.",
    ],
    tip: "Prepare o frango em maior quantidade e use nas marmitas da semana — praticidade que economiza tempo.",
  },
  {
    id: "bowl-quinoa-frango",
    category: "Almoço",
    title: "Bowl de quinoa com frango e legumes",
    image:
      "https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 390,
    protein: 34,
    time: "30 min",
    servings: "1 porção",
    ingredients: [
      "1/2 xícara de quinoa cozida",
      "120g de peito de frango desfiado",
      "1/2 xícara de brócolis no vapor",
      "1/4 de cenoura ralada",
      "1 col. de chá de azeite e shoyu light",
    ],
    steps: [
      "Cozinhe a quinoa conforme instruções da embalagem.",
      "Cozinhe o brócolis no vapor até ficar macio, mas ainda firme.",
      "Monte o bowl com a quinoa na base, seguida do frango, brócolis e cenoura.",
      "Finalize com azeite e um fio de shoyu light.",
    ],
    tip: "A quinoa é uma das poucas fontes vegetais com proteína completa — ótima aliada do emagrecimento.",
  },
  {
    id: "wrap-frango-integral",
    category: "Almoço",
    title: "Wrap integral de frango e iogurte",
    image:
      "https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 320,
    protein: 30,
    time: "15 min",
    servings: "1 porção",
    ingredients: [
      "1 tortilha integral",
      "100g de frango desfiado temperado",
      "2 col. de sopa de iogurte grego natural",
      "Alface, tomate e cenoura ralada",
      "Mostarda a gosto",
    ],
    steps: [
      "Misture o frango desfiado com o iogurte grego e a mostarda.",
      "Aqueça levemente a tortilha em uma frigideira seca.",
      "Recheie com o frango, alface, tomate e cenoura.",
      "Enrole bem firme e corte ao meio para servir.",
    ],
    tip: "Ótima opção para levar de marmita: é prática, saborosa e nada sofrida.",
  },

  // JANTAR
  {
    id: "salmao-legumes-assados",
    category: "Jantar",
    title: "Salmão assado com legumes",
    image:
      "https://images.pexels.com/photos/5643426/pexels-photo-5643426.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 360,
    protein: 32,
    time: "25 min",
    servings: "1 porção",
    ingredients: [
      "150g de filé de salmão",
      "1 abobrinha em rodelas",
      "1/2 pimentão em tiras",
      "1 col. de sopa de azeite",
      "Alecrim, limão, sal e pimenta a gosto",
    ],
    steps: [
      "Pré-aqueça o forno a 200°C.",
      "Disponha o salmão e os legumes em uma assadeira, temperando com azeite e ervas.",
      "Asse por cerca de 15-18 minutos, até o salmão ficar macio e os legumes levemente dourados.",
      "Finalize com um fio de limão antes de servir.",
    ],
    tip: "O salmão é rico em ômega-3, que ajuda a reduzir a inflamação e favorece a saúde metabólica.",
  },
  {
    id: "omelete-legumes",
    category: "Jantar",
    title: "Omelete recheada de legumes",
    image:
      "https://images.pexels.com/photos/12431192/pexels-photo-12431192.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 250,
    protein: 20,
    time: "12 min",
    servings: "1 porção",
    ingredients: [
      "3 ovos",
      "1/2 xícara de espinafre picado",
      "1/4 de cebola picada",
      "2 col. de sopa de queijo cottage",
      "Sal, pimenta e orégano a gosto",
    ],
    steps: [
      "Bata os ovos com sal e pimenta.",
      "Refogue rapidamente a cebola e o espinafre em uma frigideira antiaderente.",
      "Adicione os ovos batidos e deixe cozinhar em fogo baixo.",
      "Quando estiver quase firme, adicione o cottage, dobre a omelete ao meio e finalize a cocção.",
    ],
    tip: "Jantares leves à base de ovos ajudam a não sobrecarregar a digestão antes de dormir.",
  },
  {
    id: "sopa-legumes-frango",
    category: "Jantar",
    title: "Sopa cremosa de legumes com frango desfiado",
    image:
      "https://images.pexels.com/photos/12017478/pexels-photo-12017478.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 230,
    protein: 24,
    time: "35 min",
    servings: "2 porções",
    ingredients: [
      "1 abobrinha picada",
      "1 cenoura picada",
      "1/2 abóbora picada",
      "100g de frango cozido e desfiado",
      "1 dente de alho e cebola a gosto",
      "Caldo de legumes caseiro",
    ],
    steps: [
      "Refogue o alho e a cebola, adicione os legumes picados.",
      "Cubra com o caldo de legumes e cozinhe até os legumes ficarem bem macios.",
      "Bata metade da sopa no liquidificador para dar cremosidade e retorne à panela.",
      "Adicione o frango desfiado, ajuste o sal e sirva bem quente.",
    ],
    tip: "Congele porções individuais — ter uma sopa pronta no freezer evita escolhas por impulso em dias corridos.",
  },

  // SOBREMESAS
  {
    id: "mousse-proteica-chocolate",
    category: "Sobremesas",
    title: "Mousse proteica de chocolate",
    image:
      "https://images.pexels.com/photos/1334129/pexels-photo-1334129.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 160,
    protein: 18,
    time: "10 min + geladeira",
    servings: "1 porção",
    ingredients: [
      "1 banana congelada",
      "1 scoop de whey protein sabor chocolate",
      "1 col. de sopa de cacau em pó",
      "2 col. de sopa de iogurte grego",
    ],
    steps: [
      "Bata todos os ingredientes no processador até obter um creme liso.",
      "Transfira para um potinho e leve à geladeira por 20 minutos.",
      "Sirva gelado, com raspas de chocolate 70% por cima se desejar.",
    ],
    tip: "Uma sobremesa que satisfaz a vontade de doce sem sabotar o seu dia.",
  },
  {
    id: "iogurte-granola-frutas",
    category: "Sobremesas",
    title: "Copinho de iogurte, granola e frutas",
    image:
      "https://images.pexels.com/photos/2531176/pexels-photo-2531176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 190,
    protein: 16,
    time: "5 min",
    servings: "1 porção",
    ingredients: [
      "1 pote de iogurte grego natural",
      "1 col. de sopa de granola sem açúcar",
      "1/2 xícara de frutas picadas (manga, morango ou kiwi)",
      "Canela a gosto",
    ],
    steps: [
      "Em um copo, monte camadas alternadas de iogurte, frutas e granola.",
      "Finalize com canela por cima.",
      "Sirva imediatamente para manter a granola crocante.",
    ],
    tip: "Substitua o açúcar por canela: ela adoça naturalmente e ainda ajuda a controlar a glicemia.",
  },
  {
    id: "picole-proteico-iogurte",
    category: "Sobremesas",
    title: "Picolé proteico de iogurte e frutas vermelhas",
    image:
      "https://images.pexels.com/photos/15048298/pexels-photo-15048298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    calories: 110,
    protein: 12,
    time: "5 min + congelador",
    servings: "2 picolés",
    ingredients: [
      "1 pote de iogurte grego natural",
      "1/2 xícara de frutas vermelhas",
      "1 col. de chá de mel (opcional)",
      "Forminhas de picolé",
    ],
    steps: [
      "Bata o iogurte com as frutas vermelhas e o mel até ficar homogêneo.",
      "Despeje nas forminhas de picolé.",
      "Leve ao congelador por no mínimo 4 horas, ou até firmar completamente.",
    ],
    tip: "Ótima opção para dias quentes ou para matar a vontade de algo doce e gelado sem culpa.",
  },
];
