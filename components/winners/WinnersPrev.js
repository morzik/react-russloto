import React from "react";
import {safeHTML} from "../../utils/safeHTML";

const WinnersPrev = ({attr,photo,name,sum}) => {
  return (
    <div {...attr} className={"winners__prev"}>
      <div className="winners__prev-block">
        <div className="winners__prev-bg">
          <div className="winners__prev-bg-block">
            <img src={`${photo}.png`} alt={name}/>
          </div>
        </div>
        <div className="winners__prev-info">
          <p className="winners__prev-info-name">{safeHTML(name)}</p>
          <p className="winners__prev-info-sum">{safeHTML(sum)}</p>
          <p className="winners__prev-info-read">{"Читать историю"}</p>
        </div>
      </div>
    </div>
  )
};

export default WinnersPrev;

