import React, {useRef, useState} from "react";
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import WinnersPrev from "./WinnersPrev";

SwiperCore.use([Navigation, Pagination]);

const WinnersPrevius = ({carousel, newId, onClick, ...attr}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // const [activeId, setId] = useState(newId);

  const listItems = carousel.map(({...item}, index) => (
      <SwiperSlide key={index} onClick={()=>onClick(index+1)}>
        <WinnersPrev {...item}/>
      </SwiperSlide>
    )
  );
  return (
    <>
      <Swiper className={"winners__preview-block"} {...attr}
              onInit={(swiper) => {
                requestAnimationFrame(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                });
              }}>

        {listItems}
      </Swiper>
      <button className={"winners__preview-nav winners__preview-nav_prev"} ref={prevRef}>
        <div className="winners__preview-nav-block winners__preview-nav-block_prev"/>
      </button>
      <button className={"winners__preview-nav winners__preview-nav_next"} ref={nextRef}>
        <div className="winners__preview-nav-block winners__preview-nav-block_next"/>
      </button>
    </>
  );
}

export default WinnersPrevius;
