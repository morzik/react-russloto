import React from "react";
import Icon from "../icon/Icon";


const SocialBlock = ({list}) => {
  const listItems = list.map(({icon,id, ...attr}) => (
    <li key={id}>
      <a className={"social-block__item"} {...attr}>
        <Icon {...icon}/>
      </a>
    </li>
  ))

  return (
    <div className={"social-block"}>
      <ul className="social-block__list">
        {listItems}
      </ul>
    </div>
  )
};

export default SocialBlock;

