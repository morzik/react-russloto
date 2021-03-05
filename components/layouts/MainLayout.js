import React from 'react';
import Head from "next/dist/next-server/lib/head";
import Intro from '../intro/Intro';
import About from '../about/About';
import Instruction from "../instruction/Instruction";
import InfoBlock from "../infoBlock/InfoBlock";

import {intro, about, instruction, infoBlock} from "../../constants/copyright";


const MainLayout = ({children}) => (
  <div className={'main-container'}>
    <Head>
      <meta charSet="utf-8"/>
      <title>title</title>
      <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta name="description" content="description" />
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Intro {...intro}/>
    <About {...about}/>

    <Instruction {...instruction}/>
    <InfoBlock {...infoBlock}/>

  </div>
);

export default MainLayout;
