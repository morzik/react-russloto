import React, {useRef} from "react";
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import WinnersPrev from "./WinnersPrev";

SwiperCore.use([Navigation, Pagination]);

const WinnersPrevius = ({carousel,direction,spaceBetween, slidesPerView}) =>{
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const listItems = carousel.map(({id, ...item}) => (
    <SwiperSlide key={id}>
      <WinnersPrev {...item}/>
    </SwiperSlide>
  ));
  return(
    <>
      <Swiper className={"winners__preview-block"} direction={direction} spaceBetween={spaceBetween} slidesPerView={slidesPerView}
              onInit={(swiper) => {
                requestAnimationFrame(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                });
              }}>

        {listItems}
      </Swiper>
      <div className={"winners__preview-nav winners__preview-nav_prev"} ref={prevRef}>
        <div className="winners__preview-nav-block winners__preview-nav-block_prev"/>
      </div>
      <div className={"winners__preview-nav winners__preview-nav_next"} ref={nextRef}>
        <div className="winners__preview-nav-block winners__preview-nav-block_next"/>
      </div>
    </>
  );
}

export default WinnersPrevius;
