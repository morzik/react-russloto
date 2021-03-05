import React from "react";

const InstructionVideo = ({src,attr}) => (
  <div className={"instruction__video"} {...attr}>
    <video src={src} {...attr}></video>
  </div>
);


export default InstructionVideo;

