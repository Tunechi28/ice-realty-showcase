import { motion } from "framer-motion";
import { Bath, BedDouble, Maximize, ArrowUpRight } from "lucide-react";
import dev1 from "@/assets/dev-1.jpg";
import dev6 from "@/assets/dev-6.jpg";
import dev9 from "@/assets/dev-9.jpg";

const properties = [
  {
    image: dev1,
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
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-28 md:py-36 bg-muted relative">
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
            Curated Selection
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Featured <span className="italic">Properties</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-base">
            Explore our handpicked collection of premium properties in the most sought-after locations.
          </p>
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
              className="group bg-card rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-foreground/8 cursor-pointer border border-border/50 transition-shadow duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <motion.img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase backdrop-blur-sm">
                    {property.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-primary font-body text-xs tracking-[0.2em] uppercase">
                    {property.location}
                  </p>
                  <p className="font-display text-xl text-primary font-semibold">
                    {property.price}
                  </p>
                </div>
                <h3 className="font-display text-xl text-foreground mb-4">
                  {property.title}
                </h3>
                <div className="flex items-center gap-5 pt-4 border-t border-border/60">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <BedDouble size={15} strokeWidth={1.5} />
                    <span className="text-sm font-body">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Bath size={15} strokeWidth={1.5} />
                    <span className="text-sm font-body">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Maximize size={15} strokeWidth={1.5} />
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
