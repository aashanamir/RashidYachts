import React from 'react'
import "./Home.css";
import Section1 from './Section1/Section1'
import BreakLine from '../../components/BreakLine/BreakLine'
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import ImageSlider from '../../components/Slider/Slider';
import PaymentPlanSection from './PaymentPlanSection/PaymentPlanSection';
import FloorPlanSection from './FloorPlanSection/FloorPlanSection';
import CallBackSection from './CallBackSection/CallBackSection';

const Home = () => {
  return (
    <div className='home'>
      <Section1/>
      <BreakLine/>
      <Section2/>
      <BreakLine/>
      <Section1/>
      <BreakLine/>
      <Section3/>
      <FeaturesSection/>
      <ImageSlider />
      <PaymentPlanSection/>
      <FloorPlanSection/>
      <CallBackSection/>
    </div>
  )
}

export default Home