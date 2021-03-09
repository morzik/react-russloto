import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, EffectCoverflow} from 'swiper';
import SafetyCard from "./SafetyCard";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const SafetyCarousel = ({list, ...attr}) => {
  const listItems = list.map(({className, id, ...item}) => (
    <SwiperSlide key={id}  className={`safety__card ${className}`}>
      <SafetyCard {...item}/>
    </SwiperSlide>
  ));
  return (
    <div className={"safety__carousel"}>
      <Swiper {...attr}>
        {listItems}
      </Swiper>
    </div>
  )
};

export default SafetyCarousel;

