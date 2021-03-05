import React from "react";
import InfoBlockItem from "./InfoBlockItem";

const InfoBlockList = ({info}) => {

  const listItems = info.map(({icon,text})=>(
    <InfoBlockItem icon={icon} text={text}/>
  ));

  return (
    <ul className={"info-block__list"}>
      {listItems}
    </ul>
  )
};

export default InfoBlockList;

