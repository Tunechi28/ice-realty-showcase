import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";

const images = [prop1, prop2, prop3];
const captions = ["Residential Estate, Benin", "Commercial Complex, Abuja", "Mixed-Use Development, Lagos"];

const DevelopmentSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="development" className="py-28 md:py-36 bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Projects
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Property <span className="italic">Development</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base">
            We develop residential and commercial projects designed to meet real market needs — combining functionality, quality construction, and strategic location selection.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="overflow-hidden rounded-xl cursor-pointer group relative shadow-lg shadow-foreground/5"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`Ice Realty development project ${i + 1}`}
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="font-body text-primary-foreground text-sm tracking-wide">{captions[i]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/services/property-development"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary/30 text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <motion.div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            alt="Development project"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default DevelopmentSection;
