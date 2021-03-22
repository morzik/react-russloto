import React from "react";
import Picture from "../picture/Picture";


const StatisticsMap = ({image}) => (
  <div className={"statistics__map"} >
    <div className="statistics__map-salute">
      <img data-src="images/statistics/salute-1.svg" data-expand="-5" className={"lazyload"} alt="salute"/>
    </div>
    <div className="statistics__map-salute">
      <img data-src="images/statistics/salute-2.svg" data-expand="-5" className={"lazyload"} alt="salute"/>
    </div>
    <Picture {...image}/>

  </div>
);

export default StatisticsMap;

