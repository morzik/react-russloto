import React from "react";
import Picture from "../picture/Picture";


const WinnersModalItem = ({image}) => {
  return (
    <div className={"winners-modal__item"}>
      <Picture {...image}/>
    </div>
  )};

export default WinnersModalItem;

