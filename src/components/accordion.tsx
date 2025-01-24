import { useState } from "react";
import { AccordionItem } from "@bigpicture/App";
import "../App.css";

interface AccordionProps {
  data: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="big-picture-title orange-title">
        <h1>
          <span>CONSTRUINDO MINHA</span>
          <span>BIG PICTURE</span>
        </h1>
        <p>
          Através de direcionamentos espirituais no âmbito natural, tenho um
          panorama estendido daquilo que já sou.
        </p>
      </div>
      <div className="accordion">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`accordion-item ${
              activeAccordion === index ? "active" : ""
            }`}
          >
            <div
              className="accordion-header"
              onClick={() => handleAccordionClick(index)}
            >
              <h3>{item.title}</h3>
              <span className="icon">
                {activeAccordion === index ? "-" : "+"}
              </span>
            </div>
            {activeAccordion === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
