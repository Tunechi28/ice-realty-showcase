import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="py-28 md:py-36 bg-secondary overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
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
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6">
            Let's Start a <span className="italic">Conversation</span>
          </h2>
          <p className="font-body text-secondary-foreground/50 max-w-md mx-auto">
            Ready to find your next property or learn about our services? We'd love to hear from you.
          </p>
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
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-xs text-secondary-foreground/40 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-secondary-foreground whitespace-pre-line text-sm">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/25 focus:outline-none focus:border-primary/50 focus:bg-secondary-foreground/8 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/25 focus:outline-none focus:border-primary/50 focus:bg-secondary-foreground/8 transition-all duration-300"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3.5 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/25 focus:outline-none focus:border-primary/50 focus:bg-secondary-foreground/8 transition-all duration-300"
            />
            <textarea
              placeholder="Tell us about your real estate needs..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground font-body text-sm placeholder:text-secondary-foreground/25 focus:outline-none focus:border-primary/50 focus:bg-secondary-foreground/8 transition-all duration-300 resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-3"
            >
              Send Message
              <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
