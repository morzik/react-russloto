import React,{useState} from "react";
import Collapse, {Panel} from 'rc-collapse';
import {safeHTML} from "../../utils/safeHTML";
import Picture from "../picture/Picture";

const WinnersItem = ({attr,photo,name,title,history,sum,sign,className}) => {
  return (
    <div className={`winners__item ${className?className:""}`} {...attr}>
      <img data-src="images/winners/winners.svg" alt={"decoration"} className={"winners__item-decor lazyload"}/>
      <div className="winners__item-bg">
        <div className="winners__item-bg-block">
          <Picture {...photo} />
        </div>
      </div>
      <div className="winners__item-about">
        <span className="winners__item-title">{safeHTML(title)}</span>
        <Collapse className={"winners__history"}>
          <Panel header={"История победителя"}>
            {safeHTML(history)}
          </Panel>
        </Collapse>
      </div>
      <div className="winners__item-info">
        <p className="winners__item-info-name">{safeHTML(name)}</p>
        <p className="winners__item-info-sign">{safeHTML(sign)}</p>
        <p className="winners__item-info-sum">{safeHTML(sum)}</p>
      </div>
    </div>
  )
};

export default WinnersItem;

