import React from "react";
import WinnersItem from "./WinnersItem";
import WinnersCarousel from "./WinnersCarousel";
import Picture from "../picture/Picture";
import Button from "../button/Button";
import {safeHTML} from "../../utils/safeHTML";

const Winners = ({attr, bg, carousel, item, button, link, previews}) => {

  return (
    <section className={"winners"} {...attr}>
      <div className="winners__content">
        <div className="winners__bg">
          <Picture {...bg}/>
        </div>
        <div className="winners__carousel">
          <WinnersItem {...item} className={"winners__carousel-block winners__carousel-block_desk"}/>
          <div className="winners__carousel-nav winners__carousel-nav_prev">
            <div className="winners__carousel-nav-block winners__carousel-nav-block_prev" />
          </div>
          <div className="winners__carousel-nav winners__carousel-nav_next">
            <div className="winners__carousel-nav-block winners__carousel-nav-block_next" />
          </div>
        </div>
        <Button {...button}>{safeHTML(button.text)}</Button>
        <Button {...link}>{safeHTML(link.text)}</Button>
      </div>
      <div className="winners__preview">
        <WinnersCarousel carousel={carousel} {...previews}/>
      </div>
    </section>
  )
};

export default Winners;

