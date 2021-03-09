import React from "react";
import InfoBlockItem from "./InfoBlockItem";

const InfoBlockList = ({info}) => {

  const listItems = info.map(({icon,text,id})=>(
    <InfoBlockItem icon={icon} text={text} key={id}/>
  ));

  return (
    <ul className={"info-block__list"}>
      {listItems}
    </ul>
  )
};

export default InfoBlockList;

