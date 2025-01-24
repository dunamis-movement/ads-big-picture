import React from "react";
import "./App.css";
import Header from "./components/header";
import BigPictureCards from "./components/big-picture-overview";
import Accordion from "./components/accordion";

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "01 VERSÍCULOS",
      content:
        "Versículos bíblicos que o Senhor já falou comigo e que marcaram meu relacionamento com Ele.",
    },
    {
      id: 2,
      title: "02 DIREÇÕES SOBRENATURAIS (SER / FAZER / TER)",
      content: "Direções espirituais para desenvolvimento pessoal.",
    },
    {
      id: 3,
      title: "03 ESFERAS DA SOCIEDADE",
      content:
        "Como posso impactar diferentes esferas da sociedade com meu propósito.",
    },
    {
      id: 4,
      title: "04 DORES",
      content: "Reflexão sobre as dores e desafios enfrentados.",
    },
    {
      id: 5,
      title: "05 PAIXÕES",
      content: "Paixões e talentos únicos que me movem.",
    },
    {
      id: 6,
      title: "06 CONEXÕES",
      content: "Pessoas e relacionamentos que são importantes para mim.",
    },
    {
      id: 7,
      title: "07 DONS: DE CRISTO E DO ESPÍRITO SANTO",
      content: "Dons espirituais que foram revelados ao longo da jornada.",
    },
    {
      id: 8,
      title: "08 TALENTOS E HABILIDADES",
      content: "Habilidades práticas que desenvolvi ao longo do tempo.",
    },
  ];

  return (
    <div className="container">
      <Header />
      <BigPictureCards />
      <Accordion data={accordionData} />
    </div>
  );
};

export default App;
