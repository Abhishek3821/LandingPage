import ConversionCTA from "./component/ConversionCTA";
import FinalCTA from "./component/FinalCTA";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import PerfectForCompanies from "./component/PerfectForCompanies";
import ProblemsSolved from "./component/ProblemsSolved";
import RealResults from "./component/RealResults";
import ServicesSection from "./component/ServicesSection";
import WhyCapyngen from "./component/WhyCapyngen";
import BusinessImpactStats from "./component/BusinessImpactStats";
import WorkProcess from "./component/WorkProcess";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BusinessImpactStats />
      <ProblemsSolved />
      <ServicesSection />
      <WhyCapyngen />
      <WorkProcess />
      <PerfectForCompanies />
      <RealResults />
      <ConversionCTA />
      <FinalCTA />
    </>
  );
}

export default App;
