import React,{useState} from "react";
import Collapse, {Panel} from 'rc-collapse';
import {safeHTML} from "../../utils/safeHTML";

const WinnersItem = ({attr,photo,name,title,history,sum,sign,className}) => {
  return (
    <div className={`winners__item ${className?className:""}`} {...attr}>
      <img src={"images/winners/winners.svg"} alt={"decoration"} className="winners__item-decor"/>
      <div className="winners__item-bg">
        <div className="winners__item-bg-block">
          <img src={`${photo}.png`} alt={name}/>
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
        <p className="winners__item-info-name">{name}</p>
        <p className="winners__item-info-sign">{sign}</p>
        <p className="winners__item-info-sum">{sum}</p>
      </div>
    </div>
  )
};

export default WinnersItem;

