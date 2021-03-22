import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, EffectCoverflow} from 'swiper';
import WinnersModalSlide from "./WinnersModalSlide";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const WinnersModalCarousel = ({list, ...attr}) => {
  console.log(list);
  const listItems = list.map(({list})=>(
    <SwiperSlide className={"winners-modal__slide"}>
      <WinnersModalSlide list={list}/>
    </SwiperSlide>
  ));

  return (
    <>
      <div className={"winners-modal__carousel"}>
        <Swiper {...attr}>
          {listItems}
          <div className="winners-modal__pagination"/>
        </Swiper>

        <button className="winners-modal__carousel-nav winners-modal__carousel-nav_prev">
          <div className="winners-modal__carousel-nav-block winners-modal__carousel-nav-block_prev"/>
        </button>
        <button className="winners-modal__carousel-nav winners-modal__carousel-nav_next">
          <div className="winners-modal__carousel-nav-block winners-modal__carousel-nav-block_next"/>
        </button>
      </div>
    </>
  )
};
export default WinnersModalCarousel;
