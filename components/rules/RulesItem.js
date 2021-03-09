import React from "react";
import Picture from "../picture/Picture";
import {safeHTML} from "../../utils/safeHTML";

const RulesItem = ({image,title,text,id})=>{
  return(
    <li className={`rules__item rules__item_${id}`}>
      <div className="rules__item-image">
        <Picture {...image} />
      </div>
      <p className="rules__item-title">{safeHTML(title)}</p>
      <p className="rules__item-text">{safeHTML(text)}</p>
    </li>
  );
}

export default RulesItem;
