import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const MainLayout = ({ children }) => (
  <div className={'main-container'}>
    <Header />
    <div className={'content-wrapper'}>{children}</div>
    <Footer />
  </div>
);

export default MainLayout;
