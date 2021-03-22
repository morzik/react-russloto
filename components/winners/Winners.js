import React, {useEffect, useState} from "react";
import WinnersItem from "./WinnersItem";
import WinnersCarousel from "./WinnersCarousel";
import Picture from "../picture/Picture";
import Button from "../button/Button";
import {safeHTML} from "../../utils/safeHTML";
import WinnersPrevius from "./WinnersPrevius";
import {requestModal} from "../../redux/reducer/modals";
import {useDispatch} from "react-redux";

const Winners = ({attr, bg, carousel, button, link, previewsAttr, carouselAttr}) => {
  const [width, setWidth] = useState(null);
  const [newId, setId] = useState(carousel[0].id);

  useEffect(() => {
    global.window && global.window.addEventListener("resize", () => {
      setWidth(global.window && global.window.innerWidth);
    });
    setWidth(global.window && global.window.innerWidth);
  }, []);

  const dispatch = useDispatch();
  return (
    <section>
      <div className={"winners"} {...attr}>
        <div className="winners__content">
          <div className="winners__bg">
            <Picture {...bg}/>
          </div>
          {getItem(carousel, carouselAttr, width, newId)}
          <Button {...button}>{safeHTML(button.text)}</Button>
          <Button {...link} onClick={() => {dispatch(requestModal({type: 'winnersModal'}))}} >{safeHTML(link.text)}</Button>
        </div>
        {getPreview(carousel, previewsAttr, width, newId, setId)}

      </div>
    </section>
  )
};

function getPreview(carousel, previewsAttr, width, newId, setId) {
  if (width < 1023)
    return null;
  else
    return (
      <div className="winners__preview">
        <WinnersPrevius carousel={carousel} {...previewsAttr} newId={newId} onClick={setId}/>
      </div>
    );
}

function getItem(carousel, carouselAttr, width, newId) {
  return width < 1023 ? (
    <div className="winners__carousel">
      <WinnersCarousel carousel={carousel} {...carouselAttr}/>
    </div>
  ) : (<WinnersItem {...carousel[newId - 1]}/>);
}


export default Winners;

