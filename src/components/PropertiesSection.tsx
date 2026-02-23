import { motion } from "framer-motion";
import { Bath, BedDouble, Maximize, ArrowUpRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "The Grand Loft",
    location: "Downtown District",
    price: "$1,250,000",
    beds: 3,
    baths: 2,
    sqft: "2,400",
    tag: "For Sale",
  },
  {
    image: property2,
    title: "Skyline Penthouse",
    location: "Midtown Heights",
    price: "$2,800,000",
    beds: 4,
    baths: 3,
    sqft: "3,800",
    tag: "Featured",
  },
  {
    image: property3,
    title: "Parkview Estate",
    location: "Westside Gardens",
    price: "$875,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    tag: "New Listing",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Curated Selection
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Featured <span className="italic">Properties</span>
          </h2>
          <motion.div
            className="w-16 h-px bg-primary mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {properties.map((property) => (
            <motion.div
              key={property.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-card border border-border overflow-hidden hover:shadow-2xl cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <motion.img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase">
                    {property.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-6">
                <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-1">
                  {property.location}
                </p>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {property.title}
                </h3>
                <p className="font-display text-2xl text-primary font-semibold mb-4">
                  {property.price}
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <BedDouble size={16} strokeWidth={1.5} />
                    <span className="text-sm font-body">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Bath size={16} strokeWidth={1.5} />
                    <span className="text-sm font-body">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Maximize size={16} strokeWidth={1.5} />
                    <span className="text-sm font-body">{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesSection;
