import React from "react";
import Picture from "../picture/Picture";


const FooterLogo = ({image,...attr}) => {return(
  <a className={"footer__logo"} {...attr}>
    <Picture {...image}/>
  </a>
)};

export default FooterLogo;

