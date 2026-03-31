import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, CheckCircle, Play, X, Target, Compass, Shield, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const devHeroImg = "https://icerealty-development.s3.us-east-2.amazonaws.com/WhatsApp+Image+2026-03-31+at+00.14.02.jpeg";

const devVideos = [
  "https://icerealty-development.s3.us-east-2.amazonaws.com/WhatsApp+Video+2026-03-31+at+00.04.11.mp4",
  "https://icerealty-development.s3.us-east-2.amazonaws.com/WhatsApp+Video+2026-03-31+at+00.13.29.mp4",
  "https://icerealty-development.s3.us-east-2.amazonaws.com/WhatsApp+Video+2026-03-31+at+00.13.56.mp4",
];

const devImages = [devHeroImg];

interface ServiceData {
  title: string;
  tagline: string;
  intro: string[];
  listTitle: string;
  items: string[];
  closing: string;
}

const servicesData: Record<string, ServiceData> = {
  "property-sales": {
    title: "Property Sales",
    tagline: "Strategic Sales. Qualified Buyers. Seamless Closings.",
    intro: [
      "Selling property requires more than listing it. It requires positioning, pricing, and precision.",
      "We represent property owners in the sale of residential and commercial assets, ensuring strategic exposure and qualified buyer engagement.",
    ],
    listTitle: "Our Sales Process Includes:",
    items: [
      "Property evaluation and pricing strategy",
      "Professional listing presentation",
      "Targeted buyer sourcing",
      "Market positioning",
      "Negotiation support",
      "Transaction coordination",
    ],
    closing:
      "Our focus is simple: attract serious buyers, close efficiently, and protect your interests throughout the process.",
  },
  "property-management": {
    title: "Property Management",
    tagline: "Professional Oversight. Predictable Returns.",
    intro: [
      "Owning property should be profitable — not stressful.",
      "At Ice Realty, we provide structured, hands-on property management services designed to protect your asset, reduce vacancy, and ensure stable returns.",
    ],
    listTitle: "Our Management Services Include:",
    items: [
      "Tenant sourcing and screening",
      "Rent monitoring and payment coordination",
      "Lease documentation support",
      "Routine property inspections",
      "Maintenance supervision and vendor coordination",
      "Dispute mediation support",
      "Vacancy reduction strategies",
      "Performance reporting",
    ],
    closing:
      "We understand the risks landlords face — unreliable tenants, property neglect, delayed payments — and we proactively manage these risks through structured systems and active oversight. Result: Peace of mind and predictable income.",
  },
  "leasing-services": {
    title: "Leasing Services",
    tagline: "Reduced Vacancies. Reliable Tenants.",
    intro: [
      "Vacant properties reduce profitability. The right tenant increases it.",
      "Our leasing services are designed to minimize vacancy periods while ensuring landlords secure reliable, verified tenants.",
    ],
    listTitle: "What We Handle:",
    items: [
      "Strategic marketing of vacant units",
      "Tenant sourcing",
      "Background and eligibility screening",
      "Lease documentation coordination",
      "Move-in process support",
    ],
    closing:
      "We don't just fill spaces. We place qualified tenants that align with landlord expectations.",
  },
  "investment-advisory": {
    title: "Investment Advisory",
    tagline: "Smarter Decisions. Stronger Returns.",
    intro: [
      "Real estate is one of the strongest wealth-building tools when approached strategically.",
      "We provide informed, market-driven guidance to help investors make profitable property decisions in Abuja, Lagos, and Benin.",
    ],
    listTitle: "Our Advisory Services Include:",
    items: [
      "Market trend analysis",
      "Location performance insights",
      "Investment feasibility guidance",
      "ROI potential assessments",
      "Portfolio growth strategy",
    ],
    closing:
      "Whether you're a first-time investor or expanding your portfolio, we help you make confident, data-backed decisions.",
  },
  "property-development": {
    title: "Property Development",
    tagline: "Thoughtfully Designed. Strategically Built.",
    intro: [
      "At Ice Realty, we don't just manage and market properties — we build them.",
      "We develop residential and commercial projects designed to meet real market needs, combining functionality, quality construction, and strategic location selection.",
      "Every development is guided by careful planning, practical design, and a commitment to long-term value, whether for homeowners or investors.",
    ],
    listTitle: "What We Develop:",
    items: [
      "Residential housing projects",
      "Commercial developments",
      "Mixed-use properties",
      "Income-generating real estate",
    ],
    closing:
      "Whether you are purchasing as a homeowner or acquiring as an investor, our goal is the same: To deliver well-planned, well-built properties that provide confidence, stability, and long-term value.",
  },
};

const philosophyCards = [
  {
    icon: Target,
    title: "Market-Responsive",
    description: "Built in locations with real demand and growth potential.",
  },
  {
    icon: Compass,
    title: "Functionally Designed",
    description: "Spaces that are practical, efficient, and comfortable for everyday use.",
  },
  {
    icon: Shield,
    title: "Quality-Focused",
    description: "Constructed with durable materials and professional standards.",
  },
  {
    icon: TrendingUp,
    title: "Value-Oriented",
    description: "Properties that retain their relevance and worth over time.",
  },
];

/* ── Gallery with lightbox ── */
const DevGallery = () => {
  return (
    <div className="space-y-6">
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-xl"
      >
        <img
          src={devHeroImg}
          alt="Ice Realty development project"
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Video grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {devVideos.slice(1).map((vid, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-xl"
          >
            <video
              src={vid}
              className="w-full aspect-video object-cover"
              controls
              muted
              playsInline
              preload="metadata"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── Video Section ── */
const VideoShowcase = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <video
        ref={videoRef}
        src={devVideos[0]}
        className="w-full aspect-video object-cover"
        controls={playing}
        muted
        playsInline
        poster={devHeroImg}
      />
      {!playing && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-foreground/20"
          onClick={handlePlay}
        >
          <motion.div
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-primary/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0 0 0 0 hsla(40,38%,53%,0.4)", "0 0 0 20px hsla(40,38%,53%,0)", "0 0 0 0 hsla(40,38%,53%,0.4)"] }}
            transition={{ boxShadow: { repeat: Infinity, duration: 2 }, scale: { duration: 0.2 } }}
          >
            <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

/* ── Property Development Page ── */
const PropertyDevelopmentPage = ({ service }: { service: ServiceData }) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Cinematic Hero with parallax */}
      <section ref={heroRef} className="relative h-[85vh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <motion.img
            src={devHeroImg}
            alt="Ice Realty development aerial view"
            className="w-full h-full object-cover"
            style={{ scale: heroScale }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
        </motion.div>

        <motion.div
          className="relative z-10 container mx-auto px-6 pb-16 md:pb-24"
          style={{ opacity: heroOpacity }}
        >
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-primary-foreground/60 font-body text-sm tracking-wider uppercase mb-6 hover:text-primary hover:gap-3 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-6xl lg:text-8xl text-primary-foreground mb-4"
            >
              Property
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-6xl lg:text-8xl italic text-primary"
            >
              Development
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-body text-primary-foreground/50 text-lg md:text-xl mt-6 max-w-lg"
          >
            {service.tagline}
          </motion.p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          {service.intro.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`font-body text-muted-foreground leading-relaxed mb-6 ${
                i === 0 ? "text-xl md:text-2xl text-foreground font-light" : "text-base"
              }`}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-24 md:py-32 bg-muted relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Our Approach</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">
              Development <span className="italic">Philosophy</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-8 bg-card rounded-xl border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <card.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">{card.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">See Our Work</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">
              Project <span className="italic">Showcase</span>
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <VideoShowcase />
          </div>
        </div>
      </section>

      {/* What We Develop */}
      <section className="py-24 md:py-32 bg-secondary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-secondary-foreground">
              {service.listTitle.replace(":", "")}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 p-5 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300"
              >
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span className="font-body text-secondary-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-body text-secondary-foreground/60 text-center leading-relaxed mt-10 text-base max-w-2xl mx-auto"
          >
            Each project reflects our structured approach and deep understanding of the local market in Abuja, Lagos, and Benin.
          </motion.p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">
              Our <span className="italic">Projects</span>
            </h2>
          </motion.div>
          <DevGallery />
        </div>
      </section>

      {/* Commitment + CTA */}
      <section className="py-24 md:py-32 bg-muted relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
              Our <span className="italic">Commitment</span>
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-12">
              {service.closing}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card rounded-2xl p-10 md:p-14 border border-border/60 shadow-xl shadow-foreground/5"
          >
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
              Ready to work with Ice Realty?
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-8">
              Let's discuss your next property investment or development project.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-12 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
            >
              Contact Us Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

/* ── Generic Service Page ── */
const GenericServicePage = ({ service }: { service: ServiceData }) => (
  <>
    <section className="pt-48 pb-20 bg-secondary relative">
      <div className="container mx-auto px-6">
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-primary font-body text-sm tracking-wider uppercase mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-secondary-foreground mb-4"
        >
          {service.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-primary text-lg md:text-xl tracking-wide"
        >
          {service.tagline}
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        {service.intro.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="font-body text-muted-foreground text-base leading-relaxed mb-5"
          >
            {p}
          </motion.p>
        ))}

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-display text-2xl text-foreground mt-12 mb-6"
        >
          {service.listTitle}
        </motion.h3>

        <ul className="space-y-3 mb-12">
          {service.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="flex items-start gap-3"
            >
              <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="font-body text-foreground text-sm">{item}</span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-body text-muted-foreground text-base leading-relaxed mb-12"
        >
          {service.closing}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-card rounded-2xl p-10 border border-border/60 text-center shadow-lg shadow-foreground/5"
        >
          <h3 className="font-display text-2xl text-foreground mb-4">
            Ready to work with Ice Realty?
          </h3>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
          >
            Contact Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  </>
);

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  // Scroll to top when navigating to a service page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-48 text-center">
          <h1 className="font-display text-3xl text-foreground">Service not found</h1>
          <Link to="/" className="text-primary mt-4 inline-block">Go back home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isDevelopment = slug === "property-development";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {isDevelopment ? (
        <PropertyDevelopmentPage service={service} />
      ) : (
        <GenericServicePage service={service} />
      )}
      <Footer />
    </div>
  );
};

export default ServiceDetail;
