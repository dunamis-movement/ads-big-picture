export interface Item {
  id?: string;
  title: string;
  content: string;
}

export interface Titles {
  color: "blue" | "orange";
  title: string;
  subtitle: string;
}

export const accordionItems: Item[] = [
  {
    id: "01",
    title: "VERSÍCULOS",
    content:
      "<strong>Versículos bíblicos que o Senhor já falou comigo e que marcaram meu relacionamento com ele.</strong> <br />Os versículos que Deus já falou sobre você, são pilares para sustentar a sua jornada.",
  },
  {
    id: "02",
    title: "DIREÇÕES SOBRENATURAIS",
    content:
      "Explorar as maneiras pelas quais Deus comunica comigo. O que deus Já falou comigo em visões, palavras proféticas, sonhos, palavras de conhecimento.<br /><br /> As experiências sobrenaturais são como os faróis que iluminam a nossa visão.Quais são as palavras e qual a frequência que isso aconteceu?",
  },
  {
    id: "03",
    title: "ESFERAS DA SOCIEDADE",
    content:
      "Onde Deus te chamou para atuar com aquilo que o Senhor tem dito no seu individual?<br /> A nossa missão é ser luz na escuridão, nas diferentes esferas da sociedade. <br /><strong>Lembre-se: o Reino de Deus não é a igreja, a igreja está dentro do Reino de Deus nas 7 esferas.</strong>",
  },
  {
    id: "04",
    title: "DORES",
    content:
      "Como os momentos difíceis que enfrentamos moldaram o nosso caráter e propósito",
  },
  {
    id: "05",
    title: "PAIXÕES",
    content:
      "Quais as paixões que queimam sobre você que você deseja trazer redenção? O que causa profundo entusiasmo no seu coração? O que te tira da cama pela manhã?",
  },
  {
    id: "06",
    title: "CONEXÕES",
    content:
      "Ninguém caminha sozinho, Deus coloca pessoas estratégicas na sua vida para seu desenvolvimento.<br /><br /> Quais as conexões que desenvolvemos de forma sobrenaturais? Não podemos ignorar as conexões repentinas. Você pode estar a uma conexão do seu destino.",
  },
  {
    id: "07",
    title: "DONS: DE CRISTO E DO ESPÍRITO SANTO",
    content:
      "Você não será eficaz se você tiver o chamado ministério mas não tiver o Dom, a ferramenta para execução desse chamado. Quais os dons de Cristo e do Espírito Santo que você carrega? <br /><br /><strong>DONS DE CRISTO <br />DONS DO ESPÍRITO SANTO</strong>",
  },
  {
    id: "08",
    title: "TALENTOS E HABILIDADES",
    content:
      "Reconhecer os talentos e desenvolver as suas habilidades vai te dar cada vez mais, uma capacidade de liderar e influenciar no Reino de Deus e pra expansão do reino de Deus aqui na terra. ",
  },
];

export const cardItems: Item[] = [
  {
    title: "BIG PICTURE DE DEUS",
    content:
      "Deus formou o universo pela sua palavra, do plano invisível se tornando visível, por meio de um relacionamento íntimo com o autor do plano.",
  },
  {
    title: "BIG PICTURE DE JESUS",
    content:
      "O ministério de Jesus foi muito mais do que salvação pessoal. Foi sobre reinauguração do Reino de Deus na terra. Ele nos chamou para sermos embaixadores dEle nas 7 esferas.",
  },
  {
    title: "BIG PICTURE DO E.S.",
    content:
      "O Espírito Santo nos capacita para desenvolver o plano de Deus pai e Deus filho aqui na terra. Jesus nos convidou para fazer obras maiores através do Espírito Santo.",
  },
];

export const titles: Record<string, Titles> = {
  Entendendo: {
    color: "blue",
    title: "Entendendo a",
    subtitle:
      "Através de direcionamentos espirituais no âmbito natural, tenho um panorama estendido daquilo que já sou.",
  },
  Construindo: {
    color: "orange",
    title: "Construindo minha",
    subtitle:
      "Através de direcionamentos espirituais no âmbito natural, tenho um panorama estendido daquilo que já sou.",
  },
};
