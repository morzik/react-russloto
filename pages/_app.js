import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainLayout from '../components/layouts/MainLayout';
import '../styles/main.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    );
  }
}

export default MyApp;
