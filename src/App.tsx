import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValuePropositions from './components/ValuePropositions';
import UseCases from './components/UseCases';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
// import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import FAQ from './components/FAQ';
import LeadCaptureSection from './components/LeadCaptureSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValuePropositions />
        <UseCases />
        <LeadCaptureSection />
        <About />
        <Services />
        <CaseStudies />
        {/* <Testimonials /> */}
        <Insights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;