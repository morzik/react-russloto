import React from "react";


const Steam = ({className}) => {
  const list = [];
  let i = 6;
  
  while (i--){
    list.unshift(
      <div key={i} className={`steam__item steam__item_${i+1}`}/>
    )
  }
  return (
    <div className={`steam ${className}`}>
      {list}
    </div>
  )
};

export default Steam;

