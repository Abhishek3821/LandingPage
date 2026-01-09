import FinalCTA from "./component/FinalCTA";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import ProblemsSolved from "./component/ProblemsSolved";
import ServicesSection from "./component/ServicesSection";
import WhyCapyngen from "./component/WhyCapyngen";
import WhyTrustCapyngen from "./component/WhyTrustCapyngen";
import WorkProcess from "./component/WorkProcess";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyTrustCapyngen />
      <ProblemsSolved />
      <ServicesSection />
      <WhyCapyngen />
      <WorkProcess />
      <FinalCTA />
    </>
  );
}

export default App;
