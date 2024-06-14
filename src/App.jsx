import React from 'react';
import { Fade } from 'react-reveal';
import { useInView } from 'react-intersection-observer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Founder from './components/Founder';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import QuickLinks from './components/QuickLinks';
import Footer from './components/Footer';
import './index.css'; // Import your custom styles

const App = () => {
  const options = {
    triggerOnce: false, // Allow triggering multiple times
    threshold: 0.1, // 20% of the element is visible to trigger the animation
  };

  const [homeRef, homeInView] = useInView(options);
  const [aboutUsRef, aboutUsInView] = useInView(options);
  const [founderRef, founderInView] = useInView(options);
  const [projectsRef, projectsInView] = useInView(options);
  const [servicesRef, servicesInView] = useInView(options);
  const [contactRef, contactInView] = useInView(options);
  const [quickLinksRef, quickLinksInView] = useInView(options);
  const [footerRef, footerInView] = useInView(options);

  return (
    <div>
      <div ref={homeRef}>
        <Fade bottom when={homeInView}><Home /></Fade>
      </div>
      <div ref={aboutUsRef}>
        <Fade bottom when={aboutUsInView}><AboutUs /></Fade>
      </div>
      <div ref={founderRef}>
        <Fade bottom when={founderInView}><Founder /></Fade>
      </div>
      <div ref={projectsRef}>
        <Fade bottom when={projectsInView}><Projects /></Fade>
      </div>
      <div ref={servicesRef}>
        <Fade bottom when={servicesInView}><Services /></Fade>
      </div>
      <div ref={contactRef}>
        <Fade bottom when={contactInView}><Contact /></Fade>
      </div>
      <div ref={quickLinksRef}>
        <Fade bottom when={quickLinksInView}><QuickLinks /></Fade>
      </div>
      <div ref={footerRef}>
        <Fade bottom when={footerInView}><Footer /></Fade>
      </div>
      
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/6382633116"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}
      >
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default App;
