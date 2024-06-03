import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import Service from '../../components/serviceSection/Service';
import ContactSection from "../../components/contactSection/ContactSection";
import FeaturedOrganizations from "../../components/featuredOrganizations/FeaturedOrganizations";

const LandingPage = () => {
  return (
    <>
    <HeroSection/>
      <ContactSection />
      <FeaturedOrganizations />
    <Testimonial/>
    <Service/>
    </>
  );
};

export default LandingPage;
