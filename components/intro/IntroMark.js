import React from "react";
import * as PropTypes from "prop-types";

const IntroMark = ({text}) => (
  <div className={"intro__mark"}>
    <span className={"intro__mark-text"}>{text}</span>
    <span className={"intro__mark-arrow"}/>
  </div>
);


export default IntroMark;

IntroMark.propTypes = {
  text: PropTypes.string
};
