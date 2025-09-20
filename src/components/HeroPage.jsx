import React from 'react'
import HeroSection from './SubComponent/HeroSection';
import ServicesSection from './SubComponent/ServicesSection';
import WhyChooseUs from './SubComponent/WhyChooseUs';
import CallToAction from './SubComponent/CallToAction';
import Home from './Home';
import FloatingContact from './SubComponent/FloatingContact';
import ContactPopup from './SubComponent/ContactPopup';
import Testimonials from './SubComponent/testimonials';
import PortfolioSection from './SubComponent/projects';
import SecondAboutPrev from './SubComponent/SecondAboutPrev';
import TeamSection from './SubComponent/TeamSection';

function HeroPage() {
  return (
    <div >
      
      <ContactPopup/>
      <FloatingContact/>
      <HeroSection />
      <SecondAboutPrev/>
      <Home />
      <WhyChooseUs />
      <ServicesSection />
      <Testimonials/>
      <PortfolioSection/>
      <TeamSection/>
      <CallToAction />
    </div>
  )
}

export default HeroPage;
