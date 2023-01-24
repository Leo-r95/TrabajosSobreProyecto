import React from 'react';
import Footer from '../structure/Footer';
import AboutUs from './AboutUs';
import ActivitiesSlider from './ActivitiesSlider';
import Suscribete from './Suscribete';

const Homepage = () => {
  return (
    <>
      <ActivitiesSlider/>
      <AboutUs/>
      <Suscribete/>
      <Footer/>
    </>
  )
}

export default Homepage;