import { motion } from "framer-motion";
import heroBranded from "@/assets/hero-branded.jpg";

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "200+", label: "Units Managed" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={heroBranded}
                alt="Ice Realty building"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary hidden md:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Building Trust,
              <br />
              <span className="italic">One Property at a Time</span>
            </h2>
            <div className="w-16 h-px bg-primary mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Ice Realty & Management is a premier real estate firm dedicated to delivering
              exceptional results for buyers, sellers, and investors. Our team of seasoned
              professionals brings deep market knowledge and a client-first approach to every
              transaction.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Whether you're searching for your dream home, looking to invest, or need
              reliable property management, we provide personalized solutions that exceed
              expectations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-4xl text-primary font-semibold">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-muted-foreground tracking-wide uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
