import React from "react";
import Picture from "../picture/Picture";
import AboutItem from "./AboutItem";


const About = ({attr, image, title, subtitle, sign, items}) => {
  const listItems = items.map(({image, text}) => (
    <AboutItem image={image} text={text} key={text}/>
  ))

  return (
    <section >
      <div className={"about"} {...attr}>

        <div className="about__content">
          <div className="about__bg"/>
          <div className="about__info">
            <div className="about__image">
              <Picture {...image}/>
            </div>
            <div className="about__info-block">
              <h2 className="about__title">{title}</h2>
              <p className="about__subtitle">{subtitle}</p>
            </div>
          </div>
          <div className="about__items">
            <h3 className="about__items-title">{sign}</h3>
            <ul className="about__items-list">
              {listItems}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;

