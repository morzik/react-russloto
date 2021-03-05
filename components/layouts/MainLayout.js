import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Intro from '../intro/Intro';
import About from '../about/About';


import {intro, about} from "../../constants/copyright";

const MainLayout = ({ children }) => (
  <div className={'main-container'}>
    <Intro {...intro}/>
    <About {...about}/>

  </div>
);

export default MainLayout;
