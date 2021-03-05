import React from "react";
import * as PropTypes from "prop-types";
import Picture from "../picture/Picture";

const IntroLogo = ({attr, image}) => (
  <a className={"intro__logo"} {...attr}>
    <Picture {...image}/>
  </a>
);


export default IntroLogo;

IntroLogo.propTypes = {
  text: PropTypes.string
};
