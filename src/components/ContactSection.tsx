import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(555) 123-4567" },
  { icon: Mail, label: "Email", value: "info@icerealty.com" },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Main Street, Suite 200\nNew York, NY 10001",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-secondary-foreground mb-4">
            Let's Start a <span className="italic">Conversation</span>
          </h2>
          <motion.div
            className="w-16 h-px bg-primary mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-primary/30 text-primary shrink-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-sm text-secondary-foreground/50 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-secondary-foreground whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3.5 bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <textarea
              placeholder="Tell us about your real estate needs..."
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3.5 bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
