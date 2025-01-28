import React from "react";
import { accordionItems, cardItems, titles } from "./helpers/constants";
import Header from "./components/header/header";
import Cards from "./components/cards/cards";
import Accordion from "./components/accordion/accordion";
import Title from "./components/title/title";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container slide-down">
      <Header />
      <Title {...titles["Entendendo"]} />
      <Cards cards={cardItems} />
      <Title {...titles["Construindo"]} />
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;
