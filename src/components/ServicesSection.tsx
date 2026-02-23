import { motion } from "framer-motion";
import { Home, Building2, Key, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description: "From luxury condos to family homes, we connect buyers with properties that match their lifestyle.",
    number: "01",
  },
  {
    icon: Building2,
    title: "Property Management",
    description: "Full-service management solutions that protect your investment and maximize returns.",
    number: "02",
  },
  {
    icon: Key,
    title: "Leasing Services",
    description: "Expert tenant placement and lease management to keep your properties occupied year-round.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Data-driven market insights and strategic guidance to build a profitable portfolio.",
    number: "04",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 md:py-36 bg-background relative">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground">
              Our <span className="italic">Services</span>
            </h2>
          </div>
          <motion.div
            className="hidden md:block w-24 h-px bg-primary mt-6 md:mt-0"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 bg-card rounded-lg border border-border/60 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-4 font-display text-6xl text-border/50 group-hover:text-primary/10 transition-colors duration-500 select-none">
                {service.number}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-body text-xs font-semibold tracking-wider uppercase">Learn More</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
