import React from "react";
import Picture from "../picture/Picture";
import Steam from "../steam/Steam";

const IntroBg = ({person,table}) => (
  <div className={"intro__bg"}>
    <div className={"intro__bg-block"}>
      <div className={"intro__bg-person"}>
        <Picture {...person}/>
        <Steam className={"intro__steam intro__steam_1"}/>
        <Steam className={"intro__steam intro__steam_2"}/>
      </div>
      <div className={"intro__bg-table"}>
        <Picture {...table}/>
      </div>
    </div>
  </div>
);
export default IntroBg;
