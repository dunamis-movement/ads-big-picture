import { Item } from "@bigpicture/helpers/constants";
import "./big-picture-cards.css";

interface BigPictureCardsProps {
  data: Item[];
}

const BigPictureCards: React.FC<BigPictureCardsProps> = ({ data }) => {
  return (
    <section>
      <div className="big-picture-title blue-title">
        <h1>
          <span>Entendendo a</span>
          <span> Big Picture</span>
        </h1>
        <p>
          Através de direcionamentos espirituais no âmbito natural, tenho um
          panorama estendido daquilo que já sou.
        </p>
      </div>
      <div className="big-picture-cards-container">
        <div className="big-picture-cards">
          {data.map((card, index) => (
            <div className="big-picture-card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigPictureCards;
