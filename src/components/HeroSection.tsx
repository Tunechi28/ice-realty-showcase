import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.img
          src={heroImage}
          alt="Luxury property"
          className="w-full h-full object-cover"
          style={{ scale: imageScale }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/70" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ y: contentY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-body text-xs tracking-[0.2em] uppercase font-medium">
            Premium Real Estate & Management
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.05] mb-2"
          >
            Find Your
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl italic text-primary leading-[1.05]"
          >
            Dream Property
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-body text-primary-foreground/60 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          Exceptional service, expert management, and a curated portfolio of premium properties.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="group px-10 py-4 rounded-sm bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Book a Consultation
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" as const }}
        >
          <ChevronDown size={20} className="text-primary-foreground/40" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
