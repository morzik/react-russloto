import React from "react";
import FooterLogo from "./FooterLogo";
import SocialBlock from "../socialBlock/SocialBlock";
import {safeHTML} from "../../utils/safeHTML";
import FooterPartner from "./FooterPartner";


const Footer = ({logo,text,partners,socialBlock}) => {
  const listItems = partners.map((item,id)=>(
    <FooterPartner key={id} {...item}/>
  ));
  return(
  <footer className={"footer"}>
    <div className="footer__content">
      <FooterLogo {...logo}/>
      <p className="footer__text">{safeHTML(text)}</p>
      <SocialBlock {...socialBlock}/>
    </div>
    <ul className="footer__partners">{listItems}</ul>
  </footer>
)};

export default Footer;

