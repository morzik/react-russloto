import React, {useState} from "react";
import Collapse, {Panel} from 'rc-collapse';
import {safeHTML} from "../../utils/safeHTML";


const Accordion = ({list}) => {
  const [state, setState] = useState({
    accordion: true,
    activeKey: ['1']
  });

  function onChange(activeKey) {
    setState(prevState => {
      return {...prevState, activeKey}
    });
  }

  const {activeKey, accordion} = state;

  const listItems = list.map(({index, title, body, attr}) => (
    <Panel {...attr} header={title} key={index} extra={index}>
      {safeHTML(body)}
    </Panel>
  ));
  return(
    <Collapse className={"accordion"} accordion={accordion}
              onChange={onChange}
              activeKey={activeKey}>{listItems}</Collapse>
  )
};

export default Accordion;

