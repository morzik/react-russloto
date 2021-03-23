import React from "react";
import {safeHTML} from "../../utils/safeHTML";
import Icon from "../icon/Icon";
import LazyLoad from "react-lazyload";

const InfoBlockMore = ({text, icon}) => (
  <div className={"info-block__more"}>
    <span className="info-block__more-icon">
      <LazyLoad>
        <Icon {...icon}/>
      </LazyLoad>
    </span>
    <p className="info-block__more-text">{safeHTML(text)}</p>
  </div>
);


export default InfoBlockMore;

