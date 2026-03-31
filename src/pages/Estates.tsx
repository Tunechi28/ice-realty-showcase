import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Shield, Home, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rubyCourtImage = "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0195.JPG.jpeg";

const features = [
  {
    icon: Building2,
    title: "Thoughtfully Planned Communities",
    desc: "Each estate is designed with structure, accessibility, and everyday functionality in mind.",
  },
  {
    icon: Shield,
    title: "Quality Construction",
    desc: "We maintain strong standards in materials, layout, and finishing to ensure durability and long-term use.",
  },
  {
    icon: Home,
    title: "Comfortable Living Experience",
    desc: "Our estates are built to support real lifestyles — offering space, convenience, and livability.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value",
    desc: "Whether for homeowners or investors, our estates are positioned to retain relevance and value over time.",
  },
];

const Estates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-4"
          >
            Our Estates
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Built Communities. Proven Standards. Real Value.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary-foreground/70 font-body text-lg leading-relaxed"
          >
            Our estates represent the result of thoughtful planning, quality execution, and a deep understanding of what people need from where they live. At Ice Realty, we develop and co-develop residential communities designed for comfort, structure, and long-term relevance — creating environments that work for both residents and property owners.
          </motion.p>
        </div>
      </section>

      {/* What Defines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
            What Defines an Ice Realty Estate?
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ruby Court */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
            Our Estates
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-12" />

          <Link to="/for-sale/ruby-court" className="block max-w-5xl mx-auto group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={rubyCourtImage}
                  alt="Ruby Court"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-display text-2xl md:text-3xl mb-2">Ruby Court</h3>
                <p className="text-muted-foreground font-body">
                  Etete (GRA), Benin City
                </p>
                <span className="inline-block mt-4 text-primary font-body text-sm tracking-widest uppercase group-hover:underline">
                  View Property →
                </span>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Estates;
