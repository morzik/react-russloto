import React, {useRef, useState} from "react";
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import WinnersItem from "./WinnersItem";

SwiperCore.use([Navigation, Pagination]);

const WinnersCarousel = ({carousel, ...attr}) => {


  const prevRef = useRef(null);
  const nextRef = useRef(null);


  const listItems = carousel.map(({id, ...item}) => (
    <SwiperSlide key={id}>
      <WinnersItem {...item}/>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper className={"winners__carousel"} {...attr}
              onInit={(swiper) => {
                requestAnimationFrame(() => {
                  if (!swiper.params) return;
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                });
              }}>

        {listItems}
      </Swiper>
      <div className={"winners__carousel-nav winners__carousel-nav_prev"} ref={prevRef}>
        <div className="winners__carousel-nav-block winners__carousel-nav-block_prev"/>
      </div>
      <div className={"winners__carousel-nav winners__carousel-nav_next"} ref={nextRef}>
        <div className="winners__carousel-nav-block winners__carousel-nav-block_next"/>
      </div>
    </>

  )
};

export default WinnersCarousel;

