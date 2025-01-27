import React from "react";
import { accordionData, bigPictureData } from "./helpers/constants";
import Header from "./components/header/header";
import BigPictureCards from "./components/big-picture-cards/big-picture-cards";
import Accordion from "./components/accordion/accordion";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <BigPictureCards data={bigPictureData} />
      <Accordion data={accordionData} />
    </div>
  );
};

export default App;
