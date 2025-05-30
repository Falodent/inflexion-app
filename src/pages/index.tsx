"use client";
import About from "@/layout/about";
import Capacity from "@/layout/capacity";
import Footer from "@/layout/footer";
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
          <Insight />
          <Security />
          <Capacity />
          <Specialty />
          <InflxdTable />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
