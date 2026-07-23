export interface ChapterSection {
  heading: string;
  body: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  readTime: string;
  color: string;
  heroImage: string;
  images: string[];
  intro: string;
  sections: ChapterSection[];
  tips: string[];
  checklist: ChecklistItem[];
}

export const chapters: Chapter[] = [
  {
    id: "metabolismo",
    number: 1,
    title: "Entendendo seu corpo e metabolismo",
    subtitle: "O primeiro passo é fazer as pazes com o seu corpo",
    readTime: "6 min de leitura",
    color: "from-emerald-400 to-teal-500",
    heroImage:
      "https://images.pexels.com/photos/10895042/pexels-photo-10895042.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    images: [
      "https://images.pexels.com/photos/10895042/pexels-photo-10895042.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/10894941/pexels-photo-10894941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    intro:
      "Querida leitora, querido leitor, seja muito bem-vindo(a) ao primeiro capítulo da nossa jornada. Antes de falarmos de dietas, cardápios ou receitas, precisamos entender uma coisa muito importante: o seu corpo não é seu inimigo. Ele é o parceiro mais fiel que você tem, e emagrecer de verdade começa quando aprendemos a trabalhar com ele, e não contra ele.",
    sections: [
      {
        heading: "O que é o metabolismo, afinal?",
        body: "O metabolismo é o conjunto de processos que o seu corpo usa para transformar o que você come em energia. Ele nunca para: mesmo dormindo, você está queimando calorias para manter o coração batendo, os pulmões respirando e as células se renovando. Cada pessoa tem um ritmo metabólico único, influenciado pela genética, idade, massa muscular e nível de atividade. Por isso, comparar o seu corpo com o de outra pessoa não faz sentido — a sua jornada é só sua.",
      },
      {
        heading: "Por que dietas radicais não funcionam a longo prazo",
        body: "Cortar drasticamente as calorias pode até trazer resultados rápidos, mas o corpo entende isso como uma ameaça e reduz o gasto energético para se proteger, além de aumentar a fome. É o famoso efeito sanfona. Por isso, ao longo deste ebook, vamos construir hábitos sustentáveis, que respeitam o seu metabolismo e criam um déficit calórico saudável, sem sofrimento.",
      },
      {
        heading: "Massa muscular: sua maior aliada",
        body: "Quanto mais massa muscular você tem, mais calorias o seu corpo queima em repouso. Por isso, ao longo dos próximos capítulos, vamos falar bastante sobre proteína e movimento — eles são fundamentais para acelerar o seu metabolismo de forma natural e duradoura.",
      },
    ],
    tips: [
      "Beba um copo de água ao acordar para ativar seu metabolismo.",
      "Durma de 7 a 9 horas por noite: o sono regula os hormônios da fome.",
      "Não pule refeições — isso desacelera o metabolismo em vez de ajudar.",
      "Inclua uma fonte de proteína em cada refeição principal.",
    ],
    checklist: [
      { id: "m1", text: "Bebi um copo de água ao acordar" },
      { id: "m2", text: "Fiz pelo menos 3 refeições hoje, sem pular nenhuma" },
      { id: "m3", text: "Incluí proteína no café da manhã" },
      { id: "m4", text: "Dormi pelo menos 7 horas essa noite" },
      { id: "m5", text: "Anotei como me senti ao longo do dia (energia, fome, humor)" },
    ],
  },
  {
    id: "macronutrientes",
    number: 2,
    title: "Nutrição inteligente: os macronutrientes",
    subtitle: "Entenda o que realmente vai no seu prato",
    readTime: "7 min de leitura",
    color: "from-lime-400 to-emerald-500",
    heroImage:
      "https://images.pexels.com/photos/19127229/pexels-photo-19127229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    images: [
      "https://images.pexels.com/photos/19127229/pexels-photo-19127229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    intro:
      "Agora que você já entende como o seu corpo funciona, vamos conversar sobre o combustível que você oferece a ele todos os dias. Não existe alimento vilão — existe equilíbrio. E equilíbrio se aprende, com calma e informação de qualidade.",
    sections: [
      {
        heading: "Proteínas: as construtoras",
        body: "As proteínas ajudam a preservar a massa muscular durante o emagrecimento, aumentam a saciedade e têm um efeito térmico maior — ou seja, o corpo gasta mais energia para digeri-las. Boas fontes: frango, peixe, ovos, iogurte grego, leguminosas e proteína vegetal. Procure incluir uma porção em cada refeição.",
      },
      {
        heading: "Carboidratos: a energia do dia a dia",
        body: "Carboidratos não são inimigos, são a principal fonte de energia do corpo e do cérebro. O segredo está na escolha e na quantidade: prefira arroz integral, batata-doce, aveia, frutas e vegetais no lugar de açúcares refinados e farinhas brancas em excesso.",
      },
      {
        heading: "Gorduras boas: essenciais, não opcionais",
        body: "Abacate, azeite de oliva, castanhas e sementes ajudam na absorção de vitaminas e no equilíbrio hormonal, incluindo os hormônios ligados à fome e à saciedade. Cortar gordura completamente da dieta costuma sair pela culatra.",
      },
      {
        heading: "Fibras: as guardiãs da saciedade",
        body: "Vegetais, frutas com casca, aveia e leguminosas são ricos em fibras, que retardam a digestão, controlam o açúcar no sangue e ajudam você a se sentir satisfeito(a) por mais tempo — uma das chaves mais simples para comer menos sem passar fome.",
      },
    ],
    tips: [
      "Monte o prato com metade de vegetais, um quarto de proteína e um quarto de carboidrato.",
      "Prefira alimentos íntegros a versões ultraprocessadas.",
      "Não tenha medo de gordura boa: abacate e azeite são suas aliadas.",
      "Inclua fibras em todas as refeições para prolongar a saciedade.",
    ],
    checklist: [
      { id: "n1", text: "Montei um prato colorido, com vegetais variados" },
      { id: "n2", text: "Escolhi carboidratos integrais em vez de refinados" },
      { id: "n3", text: "Incluí uma gordura boa na alimentação de hoje" },
      { id: "n4", text: "Comi pelo menos uma fonte de fibra em cada refeição" },
      { id: "n5", text: "Evitei ultraprocessados na maior parte do dia" },
    ],
  },
  {
    id: "prato-ideal",
    number: 3,
    title: "Montando o seu prato ideal",
    subtitle: "Simples, prático e sem contar calorias a vida inteira",
    readTime: "5 min de leitura",
    color: "from-amber-400 to-orange-500",
    heroImage:
      "https://images.pexels.com/photos/27969847/pexels-photo-27969847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    images: [
      "https://images.pexels.com/photos/27969847/pexels-photo-27969847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    intro:
      "Sei que contar calorias o tempo todo pode ser cansativo e, para muita gente, gera ansiedade em vez de ajudar. Por isso, vou te ensinar o método do prato — simples, visual e que você pode usar para o resto da vida, em casa ou no restaurante.",
    sections: [
      {
        heading: "O método do prato",
        body: "Imagine seu prato dividido em três partes: metade dele preenchida com vegetais e folhas (à vontade), um quarto com proteína magra (frango, peixe, ovos, tofu) e um quarto com carboidrato de qualidade (arroz integral, batata-doce, quinoa). Simples assim, sem balança, sem aplicativo.",
      },
      {
        heading: "A ordem que você come importa",
        body: "Estudos mostram que comer primeiro os vegetais e a proteína, deixando o carboidrato por último, ajuda a controlar o pico de açúcar no sangue e aumenta a saciedade. Uma mudança pequena, com grande impacto.",
      },
      {
        heading: "Coma devagar e sem distrações",
        body: "O cérebro leva cerca de 20 minutos para perceber que você está satisfeito. Comer devagar, mastigando bem e sem o celular ou a TV, é uma das estratégias mais subestimadas — e mais eficazes — para emagrecer com leveza.",
      },
    ],
    tips: [
      "Use pratos menores: isso ajuda a controlar naturalmente as porções.",
      "Coma vegetais e proteína antes do carboidrato.",
      "Mastigue devagar, em pelo menos 20 mastigadas por garfada.",
      "Desligue telas durante as refeições e preste atenção no que come.",
    ],
    checklist: [
      { id: "p1", text: "Usei o método do prato em pelo menos uma refeição" },
      { id: "p2", text: "Comi sem celular ou TV em pelo menos uma refeição" },
      { id: "p3", text: "Mastiguei devagar e prestei atenção na comida" },
      { id: "p4", text: "Parei de comer ao perceber a primeira sensação de saciedade" },
    ],
  },
  {
    id: "hidratacao",
    number: 4,
    title: "Hidratação: a base invisível do emagrecimento",
    subtitle: "Um hábito simples que muda tudo",
    readTime: "4 min de leitura",
    color: "from-sky-400 to-cyan-500",
    heroImage:
      "https://images.pexels.com/photos/3756691/pexels-photo-3756691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    images: [
      "https://images.pexels.com/photos/3756691/pexels-photo-3756691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    intro:
      "A água é, sem exagero, um dos recursos mais poderosos e mais esquecidos quando o assunto é emagrecimento saudável. E o melhor: é de graça e está disponível para todos nós.",
    sections: [
      {
        heading: "Sede disfarçada de fome",
        body: "O centro da fome e o centro da sede ficam próximos no cérebro, e é comum confundirmos os dois sinais. Muitas vezes aquela vontade de beliscar algo às 16h é, na verdade, desidratação leve. Da próxima vez, experimente beber um copo de água e esperar 10 minutos antes de decidir se você realmente está com fome.",
      },
      {
        heading: "Água e função digestiva",
        body: "Uma boa hidratação favorece o funcionamento do intestino, o transporte de nutrientes e a eliminação de toxinas — todos processos que impactam diretamente sua energia e sua disposição para manter hábitos saudáveis.",
      },
      {
        heading: "Quanto beber?",
        body: "Uma referência simples e segura para a maioria dos adultos saudáveis é de 35ml por quilo de peso corporal ao dia, podendo variar conforme atividade física, clima e orientação individual do seu nutricionista.",
      },
    ],
    tips: [
      "Mantenha uma garrafinha de água sempre à vista.",
      "Beba um copo de água antes de cada refeição.",
      "Dê preferência à água no lugar de refrigerantes e sucos industrializados.",
      "Se tiver dificuldade em beber água pura, adicione limão, hortelã ou frutas vermelhas.",
    ],
    checklist: [
      { id: "h1", text: "Bebi água antes das principais refeições" },
      { id: "h2", text: "Atingi minha meta diária de água" },
      { id: "h3", text: "Troquei uma bebida açucarada por água hoje" },
      { id: "h4", text: "Percebi um momento em que confundi sede com fome" },
    ],
  },
  {
    id: "sono",
    number: 5,
    title: "Sono: o emagrecimento acontece também enquanto você dorme",
    subtitle: "O descanso que sua rotina esqueceu de priorizar",
    readTime: "5 min de leitura",
    color: "from-indigo-400 to-violet-500",
    heroImage:
      "https://images.pexels.com/photos/32922266/pexels-photo-32922266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    images: [
      "https://images.pexels.com/photos/32922266/pexels-photo-32922266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/32922280/pexels-photo-32922280.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    intro:
      "Muita gente foca só na alimentação e no exercício, e esquece de um dos pilares mais importantes do emagrecimento saudável: o sono de qualidade. Vamos falar sobre isso com o carinho que o assunto merece.",
    sections: [
      {
        heading: "Os hormônios da fome dormem — ou não — com você",
        body: "Duas noites maldormidas já são suficientes para aumentar a grelina (hormônio da fome) e reduzir a leptina (hormônio da saciedade). O resultado? Mais vontade de comer, especialmente doces e ultraprocessados, no dia seguinte.",
      },
      {
        heading: "Sono e força de vontade",
        body: "Quando estamos cansados, a região do cérebro responsável pelo autocontrole fica menos ativa, tornando muito mais difícil resistir a tentações. Dormir bem não é preguiça, é estratégia.",
      },
      {
        heading: "Higiene do sono na prática",
        body: "Pequenas mudanças na rotina noturna, como reduzir telas antes de dormir, manter horários regulares e criar um ambiente escuro e silencioso, fazem uma diferença enorme na qualidade do seu descanso — e, consequentemente, nos seus resultados.",
      },
    ],
    tips: [
      "Tente dormir e acordar sempre nos mesmos horários, inclusive nos fins de semana.",
      "Evite telas pelo menos 30 minutos antes de dormir.",
      "Crie um ritual relaxante à noite: chá, leitura ou alongamento leve.",
      "Evite cafeína após as 16h.",
    ],
    checklist: [
      { id: "s1", text: "Dormi e acordei em horários regulares" },
      { id: "s2", text: "Reduzi o uso de telas antes de dormir" },
      { id: "s3", text: "Criei um ambiente tranquilo para dormir" },
      { id: "s4", text: "Evitei cafeína no período da tarde/noite" },
    ],
  },
  {
    id: "exercicio",
    number: 6,
    title: "Movimento: exercício físico para queimar gordura de verdade",
    subtitle: "Você não precisa odiar treinar para ter resultado",
    readTime: "6 min de leitura",
    color: "from-rose-400 to-pink-500",
    heroImage:
      "https://images.pexels.com/photos/36400011/pexels-photo-36400011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    images: [
      "https://images.pexels.com/photos/36400011/pexels-photo-36400011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/32003373/pexels-photo-32003373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    intro:
      "Exercício não é castigo pelo que você comeu, e também não precisa ser sofrimento. O melhor treino é aquele que você consegue manter na rotina — de verdade, por meses e anos, não só por duas semanas.",
    sections: [
      {
        heading: "Musculação: a queima de gordura que continua depois do treino",
        body: "Treinos de força ajudam a construir e preservar massa muscular, o que aumenta seu metabolismo basal. Além disso, o corpo continua queimando calorias por horas após o treino, um efeito conhecido como EPOC.",
      },
      {
        heading: "Cardio: aliado, não vilão",
        body: "Caminhadas, corrida leve, dança ou bicicleta são excelentes para a saúde cardiovascular e para aumentar o gasto calórico total do dia. O ideal é combinar força e cardio ao longo da semana, respeitando seu condicionamento atual.",
      },
      {
        heading: "O exercício que você gosta é o melhor exercício",
        body: "Se você odeia academia, tudo bem — dança, natação, caminhada com o cachorro, pedalar com os filhos... o que importa é o movimento consistente. Comece devagar e aumente aos poucos, sempre respeitando seus limites.",
      },
    ],
    tips: [
      "Comece com 20-30 minutos de caminhada, 3-4 vezes por semana.",
      "Inclua treino de força pelo menos 2 vezes por semana.",
      "Escolha uma atividade que te dê prazer, não só obrigação.",
      "Movimente-se ao longo do dia: use escadas, faça pausas ativas no trabalho.",
    ],
    checklist: [
      { id: "e1", text: "Me movimentei por pelo menos 20 minutos hoje" },
      { id: "e2", text: "Fiz algum tipo de treino de força esta semana" },
      { id: "e3", text: "Escolhi escadas ou caminhada em vez do caminho mais fácil" },
      { id: "e4", text: "Me senti bem e orgulhoso(a) do meu corpo em movimento" },
    ],
  },
  {
    id: "fome-emocional",
    number: 7,
    title: "Ansiedade e fome emocional",
    subtitle: "Nem toda fome é fome de comida",
    readTime: "6 min de leitura",
    color: "from-fuchsia-400 to-purple-500",
    heroImage:
      "https://images.pexels.com/photos/33359328/pexels-photo-33359328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    images: [
      "https://images.pexels.com/photos/33359328/pexels-photo-33359328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    intro:
      "Esse é, talvez, o capítulo mais importante deste ebook — e quero que você o leia sem julgamento nenhum. Comer por ansiedade, tristeza ou tédio não é falta de força de vontade. É humano. Vamos entender juntos como lidar com isso com mais gentileza.",
    sections: [
      {
        heading: "Fome física x fome emocional",
        body: "A fome física surge aos poucos e aceita qualquer alimento. A fome emocional aparece de repente, geralmente pede algo específico (doce, salgado crocante) e não passa mesmo depois de comer bastante. Reconhecer essa diferença é o primeiro passo para lidar com ela.",
      },
      {
        heading: "Comida não resolve emoção, mas anestesia por um instante",
        body: "É normal buscar conforto na comida — ela ativa circuitos de prazer no cérebro. O problema é quando essa se torna a única ferramenta que temos para lidar com sentimentos difíceis. A boa notícia é que outras ferramentas podem ser aprendidas e fortalecidas.",
      },
      {
        heading: "Construindo novas respostas",
        body: "Antes de comer por impulso, experimente pausar por 5 minutos e se perguntar: 'o que estou sentindo agora?'. Caminhar, respirar fundo, ligar para alguém querido ou até chorar podem ser respostas mais eficazes do que comer para uma emoção que não é fome.",
      },
    ],
    tips: [
      "Antes de comer por impulso, respire fundo e espere 5 minutos.",
      "Mantenha um diário simples de emoções e alimentação.",
      "Tenha opções saudáveis e saborosas por perto para os momentos de vontade.",
      "Procure apoio profissional se sentir que a relação com a comida está muito difícil — pedir ajuda é um ato de coragem, não de fraqueza.",
    ],
    checklist: [
      { id: "f1", text: "Percebi um momento de fome emocional hoje" },
      { id: "f2", text: "Fiz uma pausa antes de comer por impulso" },
      { id: "f3", text: "Usei outra estratégia (respirar, caminhar, conversar) além de comer" },
      { id: "f4", text: "Fui gentil comigo mesmo(a), mesmo se escorreguei um pouco" },
    ],
  },
  {
    id: "habitos",
    number: 8,
    title: "Motivação e hábitos duradouros",
    subtitle: "O capítulo final é, na verdade, o seu começo",
    readTime: "5 min de leitura",
    color: "from-teal-400 to-emerald-600",
    heroImage:
      "https://images.pexels.com/photos/11394964/pexels-photo-11394964.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    images: [
      "https://images.pexels.com/photos/11394964/pexels-photo-11394964.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/4112348/pexels-photo-4112348.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    intro:
      "Chegamos ao último capítulo, mas quero que você entenda uma coisa: isso aqui não é um fim, é uma virada de chave. Motivação vai e vem, mas hábitos bem construídos ficam. Vamos falar sobre como transformar tudo o que você aprendeu em algo duradouro.",
    sections: [
      {
        heading: "Motivação é combustível fraco, hábito é motor",
        body: "Depender apenas de motivação é como tentar viajar de carro com o tanque sempre quase vazio. Hábitos automatizam boas escolhas mesmo nos dias difíceis, quando a motivação simplesmente não aparece.",
      },
      {
        heading: "Pequenos passos, grandes resultados",
        body: "Em vez de tentar mudar tudo de uma vez, escolha um ou dois hábitos deste ebook para praticar nas próximas duas semanas. Quando eles se tornarem naturais, adicione mais um. Mudanças duradouras são construídas tijolo por tijolo.",
      },
      {
        heading: "Celebre o progresso, não só o resultado final",
        body: "Beber mais água, dormir melhor, comer com mais consciência — cada uma dessas vitórias merece ser celebrada. O emagrecimento saudável é consequência de um estilo de vida mais equilibrado, não o único objetivo da sua jornada.",
      },
    ],
    tips: [
      "Escolha 1-2 hábitos por vez, não tente mudar tudo de uma vez.",
      "Registre suas pequenas vitórias, elas somam muito no fim.",
      "Tenha compaixão com você mesmo(a) nos dias mais difíceis.",
      "Volte a este ebook sempre que precisar relembrar o caminho.",
    ],
    checklist: [
      { id: "hb1", text: "Escolhi 1 ou 2 hábitos para focar nesta semana" },
      { id: "hb2", text: "Celebrei uma pequena vitória de hoje" },
      { id: "hb3", text: "Revisei meu progresso desde o capítulo 1" },
      { id: "hb4", text: "Me senti orgulhoso(a) da minha jornada até aqui" },
    ],
  },
];
