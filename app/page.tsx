import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LandingPageCarousel from '../components/LandingPageCarousel';
import PortfolioSection from '../components/PortfolioSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LandingPageCarousel />
        <PortfolioSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}