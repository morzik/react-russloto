import React from "react";
import Picture from "../picture/Picture";

const AboutItem = ({image,text}) => (
  <li className={"about__item"}>
    <div className="about__item-image">
      <Picture {...image}/>
    </div>
    <span className="about__item-text">
      {text}
    </span>
  </li>
);


export default AboutItem;

