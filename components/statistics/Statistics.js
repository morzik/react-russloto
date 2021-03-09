import React from "react";
import StatisticMap from "./StatisticsMap";
import Button from "../button/Button";
import StatisticsItem from "./StatisticsItem";

const Statistics = ({attr, title, map, list, subtitle, button}) => {
  const listItems = list.map(({index, text}) => (
    <StatisticsItem index={index} text={text} key={index}/>
  ));
  return (
    <section >
      <div className={"statistics"} {...attr}>
        <div className="statistics__content">
          <h2 className="statistics__title">{title}</h2>
          <StatisticMap {...map}/>
          <ul className="statistics__list">
            {listItems}
          </ul>
          <p className="statistics__subtitle">{subtitle}</p>
          <Button {...button}>{button.text}</Button>
        </div>
      </div>
    </section>
  )
};

export default Statistics;

