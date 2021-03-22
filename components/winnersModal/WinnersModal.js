import React from "react";
import {safeHTML} from "../../utils/safeHTML";
import WinnersModalCarousel from "./WinnersModalCarousel";


const WinnersModal = ({title,list,caruselAttr}) => {
  return (
    <div className={"winners-modal"}>
      <h2 className="winners-modal__title">{safeHTML(title)}</h2>
      <WinnersModalCarousel list={list} {...caruselAttr}/>
    </div>
  )};

export default WinnersModal;

