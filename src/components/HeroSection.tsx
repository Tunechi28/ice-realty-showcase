import { motion } from "framer-motion";
import heroImage from "@/assets/hero-property.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury property"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
            Premium Real Estate & Management
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Find Your
            <br />
            <span className="italic text-primary">Dream Property</span>
          </h1>
          <p className="font-body text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Elevating real estate experiences through exceptional service, expert management, and a curated portfolio of premium properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#properties"
              className="px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300"
            >
              View Properties
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-white/30 text-white font-body font-semibold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
