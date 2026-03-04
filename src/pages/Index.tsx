import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWork from "@/components/home/FeaturedWork";
import PricingTeaser from "@/components/home/PricingTeaser";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ServicesPreview />
        <FeaturedWork />
        <PricingTeaser />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
