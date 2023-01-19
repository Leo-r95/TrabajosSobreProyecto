import React from 'react';
import Fondo from "../structure/Fondo";
import Header from '../structure/Header';
import Sections from '../structure/Sections';
import Footer from '../structure/Footer';

const AppRouter = () => {
  return (
    <>
        <Fondo />
        <Header />
        <Sections />
        <Footer />
    </>
  )
}

export default AppRouter;