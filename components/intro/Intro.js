import React from "react";
import * as PropTypes from "prop-types";
import IntroMark from "./IntroMark";
import IntroBg from "./IntroBg";
import Button from "../button/Button";
import IntroHeader from "./IntroHeader";
import {safeHTML} from "../../utils/safeHTML";

const Intro = ({title,subtitle,text, prize, mark, header, button, bg}) => (
  <section >
    <div className={"intro"}>
      <div className={"intro__content"}>
        <IntroBg {...bg} />
        <IntroHeader {...header}/>
        <div className={"intro__info"}>
          <h2 className="intro__title">
            {title}
          </h2>
          <p className="intro__prize">{safeHTML(prize)}</p>
          <p className="intro__subtitle">{subtitle}</p>
          <span className="intro__text">
          <span>{text}</span>
        </span>
          <Button {...button} >{button.text}</Button>
          <IntroMark {...mark}/>
        </div>
      </div>
    </div>
  </section>
);



Intro.propTypes = {
  /**
   * заголовок
   */
  title: PropTypes.string,
  /**
   * подзаголовок
   */
  subtitle: PropTypes.string,
  /**
   * приз
   */
  prize: PropTypes.string,
  /**
   * текст в марке
   */
  text: PropTypes.string,
};
export default Intro;

