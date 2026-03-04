import { motion } from "framer-motion";
import { useState } from "react";
import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";

const images = [prop1, prop2, prop3];

const DevelopmentSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="development" className="py-28 md:py-36 bg-muted relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              className="overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`Ice Realty development project ${i + 1}`}
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <motion.div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            alt="Development project"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default DevelopmentSection;
