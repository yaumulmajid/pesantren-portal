
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import News from "@/components/sections/News";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Stats />
      <Testimonials />
      <News />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
