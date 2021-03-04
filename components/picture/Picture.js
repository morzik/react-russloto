import React from "react";


const Picture = ({attr, list: listData, imgAttr}) => {
  let content = null;
  if (attr){
    content = (<picture {...attr}/>)
  } else {
    let list;
    if (listData){
      list = listData.map((sourceAttr, id)=>{
        return (
            <source key={id} {...sourceAttr}/>
        )
      })
      content = (
        <picture>
          {list}
          <img {...imgAttr}/>
        </picture>
      )
    } else {
      content = (
        <picture>
          <img {...imgAttr}/>
        </picture>
      )
    }
  }
  return content;
};

export default Picture;

