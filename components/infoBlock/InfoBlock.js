import React from "react";
import {safeHTML} from "../../utils/safeHTML";
import InfoBlockList from "./InfoBlockList";
import InfoBlockMore from "./InfoBlockMore";
import Button from "../button/Button";


const InfoBlock = ({attr, title, info, more, button}) => {
  return (
    <section >
      <div className={"info-block"} {...attr}>

        <div className="info-block__content">
          <h2 className="info-block__title">{safeHTML(title)}</h2>
          <InfoBlockList info={info}/>
          <InfoBlockMore {...more}/>
          <Button {...button}>{button.text}</Button>
        </div>
      </div>
    </section>
  )
};

export default InfoBlock;

