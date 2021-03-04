import React from "react";
import * as PropTypes from "prop-types";
import IntroMark from "./IntroMark";
import IntroBg from "./IntroBg";
import Button from "../button/Button";

import { intro } from './copyright';


const Intro = ({title,subtitle,text,prize}) => (
  <section className={"intro"}>

    <div className={"intro__content"}>
      <IntroBg />
      <div className={"intro__info"}>
        <h2 className="intro__title">
          {title}
        </h2>
        <span className="intro__prize">{prize}</span>
        <span className="intro__subtitle">{subtitle}</span>
        <span className="intro__text">{text}</span>
        <IntroMark />
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

