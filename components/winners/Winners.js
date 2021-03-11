import React, {useEffect, useState} from "react";
import WinnersItem from "./WinnersItem";
import WinnersCarousel from "./WinnersCarousel";
import Picture from "../picture/Picture";
import Button from "../button/Button";
import {safeHTML} from "../../utils/safeHTML";
import WinnersPrevius from "./WinnersPrevius";

const Winners = ({attr, bg, carousel, item, button, link, previewsAttr, carouselAttr}) => {
  const [width, setWidth] = useState(null);
  const [newId, setId] = useState(carousel[0].id);

  // console.log("carousel[0].id:",carousel[0].id);
  useEffect(() => {
    global.window && global.window.addEventListener("resize", () => {
      setWidth(global.window && global.window.innerWidth);
    });
    setWidth(global.window && global.window.innerWidth);
  }, []);
  return (
    <section>
      <div className={"winners"} {...attr}>
        <div className="winners__content">
          <div className="winners__bg">
            <Picture {...bg}/>
          </div>
          {getItem(item, carousel, carouselAttr, width)}
          <Button {...button}>{safeHTML(button.text)}</Button>
          <Button {...link}>{safeHTML(link.text)}</Button>
        </div>
        {getPreview(carousel, previewsAttr, width)}

      </div>
    </section>
  )
};

function getPreview(carousel, previewsAttr, width) {
  if (width < 1023)
    return null;
  else
    return (
      <div className="winners__preview">
        <WinnersPrevius carousel={carousel} {...previewsAttr}/>
      </div>
    );
}

function getItem(item, carousel, carouselAttr, width) {
  return width < 1023 ? (
    <div className="winners__carousel">
      <WinnersCarousel carousel={carousel} {...carouselAttr}/>
    </div>
  ) : (<WinnersItem {...item}/>);
}


export default Winners;

