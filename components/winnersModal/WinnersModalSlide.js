import React from "react";
import WinnersModalItem from "./WinnersModalItem";

const WinnersModalSlide = ({list}) => {
  const listItems = list.map(({image}, index) => (
    <WinnersModalItem key={index} image={image}/>
  ));
  return (
    <>
      {/*<div className={"winners-modal__slide"}>*/}
        {listItems}
      {/*</div>*/}
    </>
  )
};

export default WinnersModalSlide;

