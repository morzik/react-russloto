import React from "react";
import {safeHTML} from "../../utils/safeHTML";
import WinnersModalCarousel from "./WinnersModalCarousel";


const WinnersModal = ({title,list,carouselAttr}) => {
  return (
    <div className={"winners-modal"}>
      <h2 className="winners-modal__title">{safeHTML(title)}</h2>
      <WinnersModalCarousel list={list} {...carouselAttr}/>
    </div>
  )};

export default WinnersModal;

