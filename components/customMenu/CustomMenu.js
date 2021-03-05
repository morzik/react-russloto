import React from "react";


const CustomMenu = ({menu}) => {
  const menuList = menu.map(({href, label, className}) => (
    <li key={label} className={`custom-menu__item ${className}`}>
      <a href={href} >
        {label}
      </a>
    </li>

  ));
  return(
    <nav className={"custom-menu"}>
      <ul>
        {menuList}
      </ul>
    </nav>
  )
};

export default CustomMenu;

