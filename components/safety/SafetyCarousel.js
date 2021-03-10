import React,{useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, EffectCoverflow} from 'swiper';
import SafetyCard from "./SafetyCard";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const SafetyCarousel = ({list, ...attr}) => {
  const [isActive, setActive] = useState(list[0].id);
  const [isOpen, setOpen] = useState(false);

  const listItems = list.map(({id,className, ...item}) => (
    <SwiperSlide
      key={id}
      className={[
        "safety__card",
        className,
        isActive === id ? "safety__card_active" : "",
        isOpen === id ? "safety__card_open" : ""
      ].join(" ")}
      onClick={()=>setOpen(isOpen !== id && id)}
      onMouseOver={()=>setActive(id)}
      onMouseOut={()=>setActive(false)}
    >
      <SafetyCard {...item}  />
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

