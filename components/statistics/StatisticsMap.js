import React from "react";
import Picture from "../picture/Picture";


const StatisticsMap = ({image}) => (
  <div className={"statistics__map"} >
    <div className="statistics__map-salute">
      <img src="images/statistics/salute-1.svg" alt="salute"/>
    </div>
    <div className="statistics__map-salute">
      <img src="images/statistics/salute-2.svg" alt="salute"/>
    </div>
    <Picture {...image}/>

  </div>
);

export default StatisticsMap;

