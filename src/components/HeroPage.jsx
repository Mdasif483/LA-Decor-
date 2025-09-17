import React from 'react'
import HeroSection from './SubComponent/HeroSection';
import ServicesSection from './SubComponent/ServicesSection';
import WhyChooseUs from './SubComponent/WhyChooseUs';
import CallToAction from './SubComponent/CallToAction';
import Home from './Home';
import FloatingContact from './SubComponent/FloatingContact';
import ContactPopup from './SubComponent/ContactPopup';

function HeroPage() {
  return (
    <div >
      
      <ContactPopup/>
      <FloatingContact/>
      <HeroSection />
      <Home />
      <ServicesSection />
      <WhyChooseUs />
      <CallToAction />
    </div>
  )
}

export default HeroPage;
