import About from "@/layout/about";
import Hero from "@/layout/hero";
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
    </>
  );
};

export default Home;
