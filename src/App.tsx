import React from "react";
import Header from "./components/header";
import BigPictureCards from "./components/big-picture-cards";
import Accordion from "./components/accordion";
import { accordionData, bigPictureData } from "./helpers/constants";
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
