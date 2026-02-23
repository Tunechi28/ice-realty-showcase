import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import heroBranded from "@/assets/hero-branded.jpg";

const stats = [
  { value: 500, suffix: "+", label: "Properties Sold" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 200, suffix: "+", label: "Units Managed" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" as const }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                src={heroBranded}
                alt="Ice Realty building"
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 border border-primary/30 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" as const }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Building Trust,
              <br />
              <span className="italic">One Property at a Time</span>
            </h2>
            <motion.div
              className="w-16 h-px bg-primary mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
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

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                >
                  <p className="font-display text-3xl md:text-4xl text-primary font-semibold">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-body text-sm text-muted-foreground tracking-wide uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
