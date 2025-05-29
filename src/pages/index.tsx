'use client'
import About from "@/layout/about";
import Hero from "@/layout/hero";
import HowItWorks from "@/layout/how-it-works";
import Mock from "@/layout/mockup";
import Navbar from "@/layout/navbar";
import Partners from "@/layout/partners";
import Purpose from "@/layout/purpose";
import Services from "@/layout/services";
import Transform from "@/layout/transform";
import { useScrollingStore } from "@/store/useScrollingStore";

const Home = () => {
  const { isComplete } = useScrollingStore();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Mock />
      <HowItWorks />
      {isComplete && (
        <div className="w-full bg-white relative">
          <Purpose />
          <Transform />
        </div>
      )}
    </>
  );
};

export default Home;
