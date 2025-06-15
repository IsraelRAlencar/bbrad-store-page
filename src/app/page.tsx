import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LookbookGallery from "./components/LookbookGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LookbookGallery />
      {/* <InstagramCarousel /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
