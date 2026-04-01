import './App.scss';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';

export default function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
