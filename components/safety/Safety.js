import React from "react";
import Button from "../button/Button";
import {safeHTML} from "../../utils/safeHTML";
import SafetyCarousel from "./SafetyCarousel";


const Safety = ({attr, button, title, list, carouselAttr}) => {
  return (
    <section>
      <div className={"safety"} {...attr}>
        <div className="safety__content">
          <h2 className="safety__title">{safeHTML(title)}</h2>
          <SafetyCarousel list={list} {...carouselAttr}/>
          <Button {...button} className={"safety__button"}>{button.text}</Button>
        </div>
      </div>
    </section>
  )
};

export default Safety;

