import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import ContactSection from "../../components/contactSection/ContactSection";
import FeaturedOrganizations from "../../components/featuredOrganizations/FeaturedOrganizations";
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <FeaturedOrganizations />
    </>
  );
};

export default LandingPage;
