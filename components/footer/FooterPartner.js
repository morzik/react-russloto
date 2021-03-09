import React from "react";
import Picture from "../picture/Picture";
import {safeHTML} from "../../utils/safeHTML";


const FooterPartner = ({image, text, note, className}) => {
  return (
    <li className={"footer__partner"}>
      <div className={`footer__partner-icon ${className ? className : ""}`}>
        <Picture {...image}/>
      </div>
      <div className="footer__partner-info">
        <p className="footer__partner-text">{safeHTML(text)}</p>
        {note? <p className={"footer__partner-note"}>{safeHTML(note)}</p>:""}
      </div>
    </li>
  )
};

export default FooterPartner;

