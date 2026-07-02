import NavBar from "../pages/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import CTA from "../components/CTA";


const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </>
  );
};

export default LandingPage;