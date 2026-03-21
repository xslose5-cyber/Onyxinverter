import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ImageGallery } from "../components/ImageGallery";
import { Services } from "../components/Services";
import { ManufacturerLogos } from "../components/ManufacturerLogos";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { ApplicableFacilities } from "../components/ApplicableFacilities";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ManufacturerLogos />
        <Hero />
        <ApplicableFacilities />
        <ImageGallery />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}