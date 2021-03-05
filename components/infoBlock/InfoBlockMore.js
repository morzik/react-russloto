import React from "react";
import {safeHTML} from "../../utils/safeHTML";

const InfoBlockMore = ({text}) => (
  <div className={"info-block__more"}>
    <span className="info-block__more-icon" />
    <p className="info-block__more-text">{safeHTML(text)}</p>
  </div>
);


export default InfoBlockMore;

