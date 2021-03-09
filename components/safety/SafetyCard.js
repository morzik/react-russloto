import React from "react";
import Icon from "../icon/Icon";
import {safeHTML} from "../../utils/safeHTML";

const SafetyCard = ({id,attr,icon,title,text,links}) => {
  return (
    <>
      <div className="safety__card-block">
        <div className="safety__card-container">
          <div className="safety__card-inside">
            <div className="safety__card-side safety__card-side_front">
              <div className="safety__card-side-bg" />
              <div className="safety__card-side-image">
                <div className="safety__card-side-image-block">
                  <Icon {...icon}/>
                </div>
              </div>
              <p className="safety__card-side-title">{safeHTML(title)}</p>
              <span className="safety__card-side-arrow safety__card-side-arrow_front"></span>
            </div>

            <div className="safety__card-side safety__card-side_back">
              <div className="safety__card-side-text">{safeHTML(text)}</div>
              <div className="safety__card-side-links">
                {links?"Да":""}
              </div>
              <span className="safety__card-side-arrow safety__card-side-arrow_back"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default SafetyCard
