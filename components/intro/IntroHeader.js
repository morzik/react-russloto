import React from "react";
import * as PropTypes from "prop-types";
import IntroLogo from "./IntroLogo";
import CustomMenu from "../customMenu/CustomMenu";



const IntroHeader = ({logo, menu}) => {
  return (
    <header className={'intro__header'}>
      <IntroLogo {...logo}/>
      <CustomMenu menu={menu} />
    </header>
  )
};

export default IntroHeader;

IntroHeader.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.string
};
