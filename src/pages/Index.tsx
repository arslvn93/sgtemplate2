
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MyStorySection from "@/components/MyStorySection";
import CategoriesSection from "@/components/CategoriesSection";
import StorySection from "@/components/StorySection";
import BoringCopySection from "@/components/BoringCopySection";
import StatsSection from "@/components/StatsSection";
import MasterclassSection from "@/components/MasterclassSection";
import ServicesGridSection from "@/components/ServicesGridSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FreebieSection from "@/components/FreebieSection";
import CtaSection from "@/components/CtaSection";
import InstagramFeed from "@/components/InstagramFeed";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <MyStorySection />
      <CategoriesSection />
      <StorySection />
      <BoringCopySection />
      <StatsSection />
      <MasterclassSection />
      <ServicesGridSection />
      <TestimonialsSection />
      <FreebieSection />
      <CtaSection />
      <InstagramFeed />
      <Footer />
    </>
  );
};

export default Index;
