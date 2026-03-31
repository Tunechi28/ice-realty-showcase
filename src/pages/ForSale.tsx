import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const listings = [
  {
    id: "ruby-court",
    title: "Ruby Court",
    location: "Etete (GRA), Benin City",
    type: "3-Bedroom Semi-Detached Duplex with BQ",
    description:
      "Experience modern living in the heart of GRA with this well-designed 3-bedroom semi-detached duplex located in the serene and secure Ruby Court Estate.",
    image:
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0195.JPG.jpeg",
    gallery: [
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0200.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0205.JPG.jpeg",
      "https://icerealty-ruby-court.s3.us-east-2.amazonaws.com/IMG_0214.JPG.jpeg",
    ],
    link: "/for-sale/ruby-court",
  },
];

const ForSale = () => {
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
            Listings
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Properties <span className="italic">For Sale</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary-foreground/70 font-body text-lg leading-relaxed"
          >
            Browse our available properties — from residential duplexes to
            investment-ready developments. Each listing reflects Ice Realty's
            commitment to quality and value.
          </motion.p>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-5xl mx-auto">
            {listings.map((listing, idx) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={listing.link}
                  className="block group bg-card rounded-xl overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Main image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-2">
                        For Sale
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl mb-2">
                        {listing.title}
                      </h2>
                      <p className="text-muted-foreground font-body text-sm mb-1">
                        {listing.location}
                      </p>
                      <p className="text-muted-foreground/70 font-body text-xs mb-4">
                        {listing.type}
                      </p>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                        {listing.description}
                      </p>

                      {/* Thumbnail previews */}
                      <div className="flex gap-2 mb-6">
                        {listing.gallery.map((img, i) => (
                          <div
                            key={i}
                            className="w-16 h-12 rounded overflow-hidden"
                          >
                            <img
                              src={img}
                              alt={`${listing.title} ${i + 2}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-primary font-body text-sm tracking-widest uppercase group-hover:gap-3 transition-all duration-300">
                        View Details <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty state hint for future */}
          {listings.length === 1 && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground/50 font-body text-sm mt-16"
            >
              More listings coming soon.
            </motion.p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForSale;
