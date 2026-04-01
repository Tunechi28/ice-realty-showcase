import { useEffect } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Car, Waves, ShieldCheck, Zap, MapPin, Sofa } from "lucide-react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allListings: Record<string, {
  title: string;
  location: string;
  headline: string;
  description: string[];
  features: string[];
  amenities: { icon: any; text: string }[];
  power: string;
  locationAdvantage: string;
  images: string[];
}> = {
  "ruby-court": {
    title: "Ruby Court",
    location: "Etete (GRA), Benin City",
    headline: "3-Bedroom Semi-Detached Duplex with BQ for Sale",
    description: [
      "Experience modern living in the heart of GRA with this well-designed 3-bedroom semi-detached duplex located in the serene and secure Ruby Court Estate, Etete.",
      "This unfurnished unit offers a perfect canvas to create your dream home, featuring spacious en-suite bedrooms, a functional layout, and an attached boys' quarters (BQ) for added convenience and flexibility.",
    ],
    features: [
      "3 spacious en-suite bedrooms",
      "Semi-detached duplex design",
      "Attached Boys' Quarters (BQ)",
      "Modern kitchen layout with ample storage space",
      "Well-ventilated living and dining areas",
      "Dedicated parking space",
    ],
    amenities: [
      { icon: Dumbbell, text: "Fully equipped sports facilities (basketball, lawn tennis, table tennis, and soccer pitch)" },
      { icon: Waves, text: "Swimming pool" },
      { icon: Dumbbell, text: "Standard gym facility" },
      { icon: Car, text: "Well-paved roads and drainage system" },
      { icon: ShieldCheck, text: "24/7 security in a gated environment" },
      { icon: MapPin, text: "Mini mart for everyday convenience" },
      { icon: Dumbbell, text: "Residents' lounge for relaxation and social gatherings" },
    ],
    power: "Enjoy reliable electricity with connection to the GRA (Hand A) feeder, known for its consistent power supply in Benin City.",
    locationAdvantage: "Situated in Etete, GRA, this property offers easy access to major roads, top schools, business hubs, and lifestyle centers — making it ideal for both homeowners and investors.",
    images: [
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0195.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0196.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0197.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0198.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0199.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0200.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0201.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0202.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0203.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0204.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0205.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0206.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0207.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0208.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0212.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0214.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0216.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0218.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0219.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0220.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0223.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0225.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0229.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0230.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0231.JPG.jpeg",
    ],
  },
};

const ForSaleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const listing = slug ? allListings[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!listing) return <Navigate to="/for-sale" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <section className="relative pt-32">
        <div className="h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              
              <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mb-2">{listing.title}</h1>
              <p className="text-primary-foreground/80 font-body">{listing.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl mb-6">{listing.headline}</h2>
            {listing.description.map((p, i) => (
              <p key={i} className="text-muted-foreground font-body leading-relaxed mb-4">{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Row 1 */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {listing.images.slice(1, 9).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-[4/3] overflow-hidden rounded-md"
              >
                <img src={img} alt={`${listing.title} ${i + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-display text-2xl mb-6">Property Features</h3>
              <ul className="space-y-3">
                {listing.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-display text-2xl mb-6">Estate Amenities</h3>
              <ul className="space-y-3">
                {listing.amenities.map((a) => (
                  <li key={a.text} className="flex items-start gap-3 font-body text-muted-foreground">
                    <a.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    {a.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Row 2 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {listing.images.slice(9, 18).map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="aspect-[4/3] overflow-hidden rounded-md">
                <img src={img} alt={`${listing.title} ${i + 10}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Power & Location */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl">Power Supply</h3>
              </div>
              <p className="text-secondary-foreground/70 font-body leading-relaxed">{listing.power}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl">Location Advantage</h3>
              </div>
              <p className="text-secondary-foreground/70 font-body leading-relaxed">{listing.locationAdvantage}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remaining Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {listing.images.slice(18).map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="aspect-[4/3] overflow-hidden rounded-md">
                <img src={img} alt={`${listing.title} ${i + 19}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl mb-4">Interested in {listing.title}?</h2>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            Get in touch with us to schedule a viewing or learn more about available units.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForSaleDetail;
