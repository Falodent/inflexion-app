"use client";

import About from "@/layout/about";
import Capacity from "@/layout/capacity";
import Accuracy from "@/layout/accuracy";
import Hero from "@/layout/hero";
import HowItWorks from "@/layout/how-it-works";
import InflxdTable from "@/layout/inflxd-table";
import Insight from "@/layout/insight";
import Mock from "@/layout/mockup";
import Navbar from "@/layout/navbar";
import Partners from "@/layout/partners";
import Purpose from "@/layout/purpose";
import Security from "@/layout/security";
import Services from "@/layout/services";
import Specialty from "@/layout/specialty";
import Transform from "@/layout/transform";
import { useScrollingStore } from "@/store/useScrollingStore";
import Coverage from "@/layout/coverage";
import Mission from "@/layout/mission";
import FAQ from "@/layout/faq";
import Carousel from "@/layout/carousel";
import Banner from "@/layout/banner";
import Footer from "@/layout/footer";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const { isComplete } = useScrollingStore();

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio > 0.1);
      },
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [isComplete]);

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

          <section ref={sectionRef}>
            <Insight isVisible={isVisible} />
            <Security isVisible={isVisible} />
          </section>

          <Capacity />
          <Specialty />
          <InflxdTable />
          <Accuracy />
          <Coverage />
          <Mission />
          <FAQ />
          <Carousel />
          <Banner />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
