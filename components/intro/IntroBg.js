import React from "react";
import Picture from "../picture/Picture";

const IntroBg = ({person,table}) => (
  <div className={"intro__bg"}>
    <div className={"intro__bg-block"}>
      <div className={"intro__bg-person"}>
        <Picture {...person}/>
      </div>
      <div className={"intro__bg-table"}>
        <Picture {...table}/>
      </div>
    </div>
  </div>
);
export default IntroBg;
