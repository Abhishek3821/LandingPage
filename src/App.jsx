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

      <section id="home">
        <HeroSection />
      </section>

      <section id="stats">
        <BusinessImpactStats />
      </section>

      <section id="problems">
        <ProblemsSolved />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="why-capyngen">
        <WhyCapyngen />
      </section>

      <section id="process">
        <WorkProcess />
      </section>

      <section id="industries">
        <PerfectForCompanies />
      </section>

      <section id="results">
        <RealResults />
      </section>

      <section id="consultation">
        <ConversionCTA />
      </section>

      <section id="contact">
        <FinalCTA />
      </section>
    </>
  );
}

export default App;
