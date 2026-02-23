import { motion } from "framer-motion";
import { Bath, BedDouble, Maximize } from "lucide-react";
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

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Curated Selection
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Featured <span className="italic">Properties</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-card border border-border overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase">
                    {property.tag}
                  </span>
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
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
