import React, {useEffect, useState} from 'react';
import Head from "next/dist/next-server/lib/head";
import Intro from '../intro/Intro';
import About from '../about/About';
import Instruction from "../instruction/Instruction";
import InfoBlock from "../infoBlock/InfoBlock";
import Winners from "../winners/Winners";
import Rules from "../rules/Rules";
import Safety from "../safety/Safety";
import Footer from "../footer/Footer";
import Pagination from "../pagination/Pagination";
import Statistics from "../statistics/Statistics";
import WinnersModal from "../winnersModal/WinnersModal";
import CustomModal from "../customModal/CustomModal";
import {registerModal, modalStorage} from "../../redux/reducer/modals";
import ModalController from "../modalController/modalController.js";
import store from "../../redux/store";
import {Provider} from "react-redux";
import {
  intro,
  about,
  instruction,
  infoBlock,
  winners,
  statistics,
  rules,
  safety,
  footer,
  pagination,
  winnersModal
} from "../../constants/copyright";
import IntroLogo from "../intro/IntroLogo";
import CustomMenu from "../customMenu/CustomMenu";


const MainLayout = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    global.window && global.window.addEventListener("resize", () => {
      setWidth(global.window && global.window.innerWidth);
    });
    setWidth(global.window && global.window.innerWidth);
  }, []);

  const myModal = function () {
    return (
      <CustomModal animation={"fade scale"} horizontalPosition={"center"} verticalPosition={"middle"}>
        <WinnersModal {...winnersModal}/>
      </CustomModal>
    )
  };
  registerModal(myModal, 'winnersModal');

  return (
    <div className={'main-container'}>
      <Head>
        <meta charSet="utf-8"/>
        <title>Русское лото. Реакт</title>
        {/*<meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>*/}
        <meta name="viewport" content="width=device-width"/>
        <meta name="description" content="description"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Intro {...intro}/>
      <About {...about}/>

      <Instruction {...instruction}/>
      <InfoBlock {...infoBlock}/>
      <Winners {...winners}/>
      <Statistics {...statistics}/>
      <Rules {...rules}/>
      <Safety {...safety}/>
      <Footer {...footer}/>
      {getPagination(pagination,width)}

      <Provider store={store}>
        <ModalController modalStorage={modalStorage}/>
      </Provider>
    </div>
  )
};

function getPagination(pagination, width) {
  if (width < 1023)
    return null;
  else
    return <Pagination {...pagination}/>;

}

export default MainLayout;
