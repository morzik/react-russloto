import React from "react";
import Collapse, {Panel} from 'rc-collapse';
import {safeHTML} from "../../utils/safeHTML";
import Picture from "../picture/Picture";
import {TransitionGroup, CSSTransition} from "react-transition-group";

{/*<TransitionGroup > <CSSTransition key={id} timeout={300} classNames={"fade"}> </CSSTransition> </TransitionGroup>*/
}

const WinnersItem = ({id, attr, photo, name, title, history, sum, sign}) => {
  return (
    <TransitionGroup className={"winners__item"}>
      <CSSTransition key={id} timeout={300} classNames={"fade"}>
        <div className={"winners__item-content"} {...attr}>
          <img src="images/winners/winners.svg" alt={"decoration"} className={"winners__item-decor"}/>
          <div className="winners__item-bg">
            <div className="winners__item-bg-block">
              <Picture {...photo} />
            </div>
          </div>
          <div className="winners__item-about">
            <span className="winners__item-title">{safeHTML(title)}</span>
            <Collapse className={"winners__history"}>
              <Panel header={"История победителя"}>
                {safeHTML(history)}
              </Panel>
            </Collapse>
          </div>
          <div className="winners__item-info">
            <p className="winners__item-info-name">{safeHTML(name)}</p>
            <p className="winners__item-info-sign">{safeHTML(sign)}</p>
            <p className="winners__item-info-sum">{safeHTML(sum)}</p>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
};

export default WinnersItem;

