import '../styles/globals.css';
import React from "react";
import Head from 'next/head';
import NavbarComponent from '../components/Layout/navBar';
import { NextUIProvider } from '@nextui-org/react';

export default function MyApp ({ Component, pageProps }){
  return(
    <React.Fragment>
      <NextUIProvider>
        <Head/>
        <NavbarComponent/>
        <Component {...pageProps}/>
      </NextUIProvider>
    </React.Fragment>
  )
}
  