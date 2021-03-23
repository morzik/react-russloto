import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import IntroLogo from "./IntroLogo";
import CustomMenu from "../customMenu/CustomMenu";


const IntroHeader = ({logo, menu}) => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    global.window && global.window.addEventListener("resize", () => {
      setWidth(global.window && global.window.innerWidth);
    });
    setWidth(global.window && global.window.innerWidth);
  }, []);

  return (
    <header className={'intro__header'}>
      {getHeader(logo, menu, width)}
    </header>
  )
};

function getHeader(logo, menu, width) {
  if (width < 1023)
    return <IntroLogo {...logo}/>;
  else
    return (
      <>
        <IntroLogo {...logo}/>
        <CustomMenu menu={menu}/>
      </>
    );
}

export default IntroHeader;

IntroHeader.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.string
};
