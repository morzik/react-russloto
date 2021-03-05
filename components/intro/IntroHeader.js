import React from "react";
import * as PropTypes from "prop-types";
import IntroLogo from "./IntroLogo";
import Link from "next/link";
import CustomMenu from "../customMenu/CustomMenu";


const IntroHeader = ({logo, menu}) => {

  console.log("!!!",menu);

  return (
    <div className={'intro__header'}>
      <IntroLogo {...logo}/>
      <CustomMenu menu={menu} />
    </div>
  )
};

export default IntroHeader;

IntroHeader.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.string
};
