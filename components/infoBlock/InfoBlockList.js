import React, {useState, useEffect} from "react";
import InfoBlockItem from "./InfoBlockItem";

const InfoBlockList = ({info}) => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    const arr = document.querySelectorAll((".info-block__item"));
    const max = arr.length - 1;
    setTimeout(()=>{
      setCount(count===max?0:count+1);
    }, 1500);
  },[count]);

  const listItems = info.map(({icon,text,id, className},index)=>(
    <InfoBlockItem className={`${className} ${count === index ? "info-block__item_active" : ""}`} icon={icon} text={text} key={id}/>
  ));

  return (
    <ul className={"info-block__list"}>
      {listItems}
    </ul>
  )
};

export default InfoBlockList;

