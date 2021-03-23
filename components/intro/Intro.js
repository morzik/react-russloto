import React from "react";
import IntroMark from "./IntroMark";
import IntroBg from "./IntroBg";
import Button from "../button/Button";
import IntroHeader from "./IntroHeader";
import {safeHTML} from "../../utils/safeHTML";

const Intro = ({attr, title, subtitle, text, prize, mark, header, button, bg}) => {

  return (
    <section >
      <div className={"intro"} {...attr}>
        <div className={"intro__content"}>
          <IntroBg {...bg} />
          <IntroHeader {...header}/>
          <div className={"intro__info"}>
            <h2 className="intro__title">
              {title}
            </h2>
            <p className="intro__prize">{safeHTML(prize)}</p>
            <p className="intro__subtitle">{subtitle}</p>
            <mark className="intro__text">
              <span>{text}</span>
            </mark>
            <Button {...button} className={"intro__button"}>{button.text}</Button>
            <IntroMark {...mark}/>
          </div>
        </div>
      </div>
    </section>
  )};


export default Intro;

