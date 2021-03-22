import React from "react";
import {safeHTML} from "../../utils/safeHTML";
import Picture from "../picture/Picture";

const WinnersPrev = ({attr,prev,name,sum}) => {
  return (
    <div {...attr} className={"winners__prev"}>
      <div className="winners__prev-block">
        <div className="winners__prev-bg">
          <div className="winners__prev-bg-block">
            <Picture {...prev}/>
          </div>
        </div>
        <div className="winners__prev-info">
          <p className="winners__prev-info-name">{safeHTML(name)}</p>
          <strong className="winners__prev-info-sum">{safeHTML(sum)}</strong>
          <p className="winners__prev-info-read">{"Читать историю"}</p>
        </div>
      </div>
    </div>
  )
};

export default WinnersPrev;

