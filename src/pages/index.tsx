import About from "@/layout/about";
import Hero from "@/layout/hero";
import HowItWorks from "@/layout/how-it-works";
import Mock from "@/layout/mockup";
import Navbar from "@/layout/navbar";
import Partners from "@/layout/partners";
import Services from "@/layout/services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Mock />
      <HowItWorks />
    </>
  );
};

export default Home;
