import React from 'react';
import Footer from '../structure/Footer';
import AboutUs from './AboutUs';
import ActivitiesSlider from './ActivitiesSlider';

const Homepage = () => {
  return (
    <>
      <ActivitiesSlider/>
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default Homepage;