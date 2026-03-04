import { motion } from "framer-motion";
import { Home, Building2, Key, TrendingUp, Hammer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description: "Strategic Sales. Qualified Buyers. Seamless Closings.",
    detail: "We help property owners sell residential and commercial assets efficiently by connecting them with verified and qualified buyers.",
    number: "01",
    slug: "property-sales",
  },
  {
    icon: Building2,
    title: "Property Management",
    description: "Professional Oversight. Predictable Returns.",
    detail: "We manage residential and commercial properties with structured systems that reduce stress, protect assets, and ensure consistent income.",
    number: "02",
    slug: "property-management",
  },
  {
    icon: Key,
    title: "Leasing Services",
    description: "Reduced Vacancies. Reliable Tenants.",
    detail: "From tenant sourcing to screening and placement, we ensure your property stays occupied by qualified and responsible tenants.",
    number: "03",
    slug: "leasing-services",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Smarter Decisions. Stronger Returns.",
    detail: "We guide investors with data-driven insights and local market expertise to help them acquire profitable real estate assets.",
    number: "04",
    slug: "investment-advisory",
  },
  {
    icon: Hammer,
    title: "Property Development",
    description: "Thoughtfully Designed. Strategically Built.",
    detail: "Ice Realty develops residential and commercial properties that combine quality construction, smart design, and long-term value.",
    number: "05",
    slug: "property-development",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-8 bg-card rounded-xl border border-border/60 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/8 overflow-hidden"
            >
              <span className="absolute top-4 right-4 font-display text-6xl text-border/50 group-hover:text-primary/10 transition-colors duration-500 select-none">
                {service.number}
              </span>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-primary/80 text-xs tracking-wider uppercase mb-3">
                  {service.description}
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.detail}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-body text-xs font-semibold tracking-wider uppercase group-hover:gap-3 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
