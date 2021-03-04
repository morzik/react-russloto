import React from "react";

const IntroMark = (props) => (
  <div className={"intro__mark"}>
    <span className={"intro__mark-text"}>{props.children}</span>
    <span className={"intro__mark-arrow"}/>
  </div>
);


export default IntroMark;
