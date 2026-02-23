import { motion } from "framer-motion";
import { Home, Building2, Key, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description:
      "From luxury condos to family homes, we connect buyers with properties that match their lifestyle and aspirations.",
  },
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Full-service management solutions that protect your investment and maximize returns with hands-off ownership.",
  },
  {
    icon: Key,
    title: "Leasing Services",
    description:
      "Expert tenant placement and lease management to keep your properties occupied with quality tenants year-round.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Data-driven market insights and strategic guidance to help you build a profitable real estate portfolio.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Our <span className="italic">Services</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-primary/20 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
