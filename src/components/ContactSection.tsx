import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-secondary-foreground mb-4">
            Let's Start a <span className="italic">Conversation</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-primary/30 text-primary shrink-0">
                <Phone size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-body text-sm text-secondary-foreground/50 uppercase tracking-wider mb-1">Phone</p>
                <p className="font-body text-secondary-foreground">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-primary/30 text-primary shrink-0">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-body text-sm text-secondary-foreground/50 uppercase tracking-wider mb-1">Email</p>
                <p className="font-body text-secondary-foreground">info@icerealty.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-primary/30 text-primary shrink-0">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-body text-sm text-secondary-foreground/50 uppercase tracking-wider mb-1">Office</p>
                <p className="font-body text-secondary-foreground">
                  123 Main Street, Suite 200
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3.5 bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Tell us about your real estate needs..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3.5 bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
