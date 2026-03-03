import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
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

      {/* Content */}
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
            className="bg-card rounded-lg p-8 border border-border/60 text-center"
          >
            <h3 className="font-display text-2xl text-foreground mb-4">
              Ready to work with Ice Realty?
            </h3>
            <a
              href="/#contact"
              className="inline-block px-10 py-4 rounded-sm bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
            >
              Contact Us Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
