import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Intro from '../intro/Intro';

import {intro} from "../../constants/copyright";

const MainLayout = ({ children }) => (
  <div className={'main-container'}>
    <Intro {...intro}/>
    {/*<Header />*/}
    {/*<div className={'content-wrapper'}>{children}</div>*/}
    {/*<Footer />*/}
  </div>
);

export default MainLayout;
