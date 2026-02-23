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
    <section id="about" className="py-28 md:py-36 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl shadow-foreground/10">
              <motion.img
                src={heroBranded}
                alt="Ice Realty building"
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-8 -right-4 md:right-[-2rem] bg-card rounded-lg p-6 shadow-xl shadow-foreground/10 border border-border/50"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="font-display text-3xl text-primary font-bold">15+</p>
              <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">Years of<br />Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Building Trust,
              <br />
              <span className="italic">One Property</span>
              <br />
              at a Time
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-5 text-base">
              Ice Realty & Management is a premier real estate firm dedicated to delivering
              exceptional results for buyers, sellers, and investors. Our team of seasoned
              professionals brings deep market knowledge and a client-first approach to every
              transaction.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-12 text-base">
              Whether you're searching for your dream home, looking to invest, or need
              reliable property management, we provide personalized solutions that exceed
              expectations.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="border-l-2 border-primary/30 pl-4"
                >
                  <p className="font-display text-3xl md:text-4xl text-foreground font-semibold">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">
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
