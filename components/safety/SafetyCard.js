import React from "react";
import Icon from "../icon/Icon";
import {safeHTML} from "../../utils/safeHTML";

const SafetyCard = ({icon, title, text, links}) => {

  const listItems = links.map((item) => (
    <li key={item.src} className={"safety__card-link"}>
      <img src={item.src} alt={item.alt}/>
    </li>
  ));

  return (
    <>
      <div className={`safety__card-block`}>
        <div className="safety__card-container">
          <div className="safety__card-inside">
            <div className="safety__card-side safety__card-side_front">
              <div className="safety__card-side-bg"/>
              <div className="safety__card-side-image">
                <div className="safety__card-side-image-block">
                  <Icon {...icon}/>
                </div>
              </div>
              <p className="safety__card-side-title">{safeHTML(title)}</p>
              <span className="safety__card-side-arrow safety__card-side-arrow_front"/>
            </div>

            <div className="safety__card-side safety__card-side_back">
              <div className="safety__card-side-text">{safeHTML(text)}</div>
              {
                links ? (<ul className="safety__card-side-links">
                  {listItems}
                </ul>) : null
              }

              <span className="safety__card-side-arrow safety__card-side-arrow_back"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default SafetyCard
