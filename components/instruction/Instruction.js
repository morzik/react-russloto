import React,{useState} from "react";
import InstructionVideo from "./InstructionVideo";
import InstructionVideoPic from "./InstructionVideoPic";
import Button from "../button/Button";
import Accordion from "../accordion/Accordion";


const Instruction = ({attr, title, video, videoPic, list, button}) => {

  return (
    <section>
      <div className={"instruction"} {...attr}>
        <div className="instruction__content">
          {/*<InstructionVideo {...video}/>*/}
          <InstructionVideoPic {...videoPic}/>
          <div className="instruction__info">
            <h2 className="instruction__title">{title}</h2>
            <div className="instruction__list">
              <Accordion list={list}/>
            </div>
            <Button {...button}>{button.text}</Button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Instruction;

