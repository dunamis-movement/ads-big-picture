import { Item } from "@bigpicture/helpers/constants";
import Title from "../title/title";
import "./cards.css";

const Cards: React.FC<{ cards: Item[] }> = ({ cards }) => {
  return (
    <section>
      <div className="cards-container">
        <div className="cards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
