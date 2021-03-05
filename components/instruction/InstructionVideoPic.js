import React from "react";
import Picture from "../picture/Picture";

const InstructionVideoPic = ({image}) => (
  <div className={"instruction__video-pic"}>
    <Picture {...image}/>
  </div>
);


export default InstructionVideoPic;

