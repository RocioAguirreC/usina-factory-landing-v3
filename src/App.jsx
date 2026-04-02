import './App.scss';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
<<<<<<< HEAD
import AuroraBackground from './components/AuroraBackground';
=======
import FadeIn from './components/FadeIn';
>>>>>>> 4d33a6a (Agregamos texturas y algunas interacciones)

export default function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FadeIn><PortfolioSection /></FadeIn>
        <FadeIn><AboutSection /></FadeIn>
        <FadeIn><LocationSection /></FadeIn>
        <FadeIn><ContactSection /></FadeIn>
      </main>
      <Footer />
    </>
  );
}
