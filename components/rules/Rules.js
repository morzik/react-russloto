import React from "react";
import Button from "../button/Button";
import RulesItem from "./RulesItem";


const Rules = ({attr, title, list, button}) => {

  const listItems = list.map((item) => {
    return (<RulesItem {...item} key={item.id}/>)
  });

  return (
    <section>
      <div className={"rules"} {...attr}>
        <div className="rules__content">
          <h2 className="rules__title">{title}</h2>
          <ul className="rules__list">{listItems}</ul>
          <Button {...button}>{button.text}</Button>
        </div>
      </div>
    </section>
  )
};

export default Rules;

