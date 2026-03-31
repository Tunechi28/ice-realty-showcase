import { motion } from "framer-motion";
import { Bath, BedDouble, Car, Dumbbell, Waves, ShieldCheck, Zap, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allImages = [
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
];

const propertyFeatures = [
  "3 spacious en-suite bedrooms",
  "Semi-detached duplex design",
  "Attached Boys' Quarters (BQ)",
  "Modern kitchen layout with ample storage space",
  "Well-ventilated living and dining areas",
  "Dedicated parking space",
];

const estateAmenities = [
  { icon: Dumbbell, text: "Fully equipped sports facilities (basketball, lawn tennis, table tennis, and soccer pitch)" },
  { icon: Waves, text: "Swimming pool" },
  { icon: Dumbbell, text: "Standard gym facility" },
  { icon: Car, text: "Well-paved roads and drainage system" },
  { icon: ShieldCheck, text: "24/7 security in a gated environment" },
  { icon: MapPin, text: "Mini mart for everyday convenience" },
];

const ForSale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <section className="relative pt-32">
        <div className="h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={allImages[0]}
            alt="Ruby Court Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-2">For Sale</p>
              <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mb-2">Ruby Court</h1>
              <p className="text-primary-foreground/80 font-body">Etete (GRA), Benin City</p>
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
            <h2 className="font-display text-2xl md:text-3xl mb-6">
              3-Bedroom Semi-Detached Duplex with BQ for Sale
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Experience modern living in the heart of GRA with this well-designed 3-bedroom semi-detached duplex located in the serene and secure Ruby Court Estate, Etete.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              This unfurnished unit offers a perfect canvas to create your dream home, featuring spacious en-suite bedrooms, a functional layout, and an attached boys' quarters (BQ) for added convenience and flexibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Row */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {allImages.slice(1, 9).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-[4/3] overflow-hidden rounded-md"
              >
                <img
                  src={img}
                  alt={`Ruby Court ${i + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Features & Estate Amenities */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Property Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl mb-6">Property Features</h3>
              <ul className="space-y-3">
                {propertyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Estate Amenities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl mb-6">Estate Amenities</h3>
              <ul className="space-y-3">
                {estateAmenities.map((a) => (
                  <li key={a.text} className="flex items-start gap-3 font-body text-muted-foreground">
                    <a.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    {a.text}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-card rounded-lg">
                <p className="font-body text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Residents' lounge</span> for relaxation and social gatherings
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {allImages.slice(9, 18).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-[4/3] overflow-hidden rounded-md"
              >
                <img
                  src={img}
                  alt={`Ruby Court ${i + 10}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Power & Location */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl">Power Supply</h3>
              </div>
              <p className="text-secondary-foreground/70 font-body leading-relaxed">
                Enjoy reliable electricity with connection to the GRA (Hand A) feeder, known for its consistent power supply in Benin City.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl">Location Advantage</h3>
              </div>
              <p className="text-secondary-foreground/70 font-body leading-relaxed">
                Situated in Etete, GRA, this property offers easy access to major roads, top schools, business hubs, and lifestyle centers — making it ideal for both homeowners and investors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remaining Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {allImages.slice(18).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-[4/3] overflow-hidden rounded-md"
              >
                <img
                  src={img}
                  alt={`Ruby Court ${i + 19}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl mb-4">Interested in Ruby Court?</h2>
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

export default ForSale;
