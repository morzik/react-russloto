import React from "react";


const StatisticsItem = ({index,text}) => (
  <div className={"statistics__item"} >
    <span className="statistics__item-index">{index}</span>
    <p className="statistics__item-text">{text}</p>
  </div>
);

export default StatisticsItem;

