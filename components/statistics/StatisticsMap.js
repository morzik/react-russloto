import React from "react";
import Picture from "../picture/Picture";
import LazyLoad from "react-lazyload";

const StatisticsMap = ({image}) => (
  <div className={"statistics__map"} >
    <div className="statistics__map-salute">
      <LazyLoad>
        <img src="images/statistics/salute-1.svg"  alt="salute"/>
      </LazyLoad>
    </div>
    <div className="statistics__map-salute">
      <LazyLoad>
        <img src="images/statistics/salute-2.svg"  alt="salute"/>
      </LazyLoad>
    </div>
    <Picture {...image}/>

  </div>
);

export default StatisticsMap;

