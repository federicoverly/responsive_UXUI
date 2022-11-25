import React from "react";
import "./feature.css";

export interface IProps {
  title: string;
  text: string;
}

const Feature = ({ title, text }: IProps) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1> {title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;