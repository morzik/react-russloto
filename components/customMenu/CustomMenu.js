import React from "react";
import { Link } from 'react-scroll';


const CustomMenu = ({menu}) => {
  const menuList = menu.map(({href, label, className}) => (
    <li key={label} className={`custom-menu__item ${className}`}>
      <Link activeClass="active"
            to={href}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}>
        {label}
      </Link>
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

