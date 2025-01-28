import React from "react";
import "./title.css";

const Title: React.FC<{
  color: "blue" | "orange";
  title: string;
  subtitle: string;
}> = (config) => {
  return (
    <div className={`big-picture-title ${config.color}-title`}>
      <h1>
        <span>{config.title}</span>
        <span> Big Picture</span>
      </h1>
      <p>{config.subtitle}</p>
    </div>
  );
};

export default Title;
