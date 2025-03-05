import { useState } from "react";
import { Item } from "@bigpicture/helpers/constants";
import "./accordion.css";

const Accordion: React.FC<{ items: Item[] }> = ({ items }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="accordion-container">
      <div className="accordion">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`accordion-item ${
              activeAccordion === index ? "active" : ""
            }`}
          >
            <button
              className="accordion-header"
              onClick={() => handleAccordionClick(index)}
            >
              <div className="accordion-title">
                <h1>{item.id}</h1>
                <h3>{item.title}</h3>
              </div>
              <span className="icon">
                {activeAccordion === index ? "-" : "+"}
              </span>
            </button>
            <div
              className={`accordion-content-wrapper ${
                activeAccordion === index ? "open" : ""
              }`}
            >
              <div
                className="accordion-content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
