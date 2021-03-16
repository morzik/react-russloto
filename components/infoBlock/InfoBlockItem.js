import React from "react";
import Icon from "../icon/Icon";
import {safeHTML} from "../../utils/safeHTML";

const InfoBlockItem = ({icon,text, className}) => (
  <div className={`info-block__item ${className}`}>
    <div className="info-block__item-icon">
      <Icon {...icon}/>
    </div>
    <div className="info-block__item-text">{safeHTML(text)}</div>
  </div>
);


export default InfoBlockItem;

