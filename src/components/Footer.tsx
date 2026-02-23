import { motion } from "framer-motion";
import IceLogo from "./IceLogo";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-gold/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <IceLogo color="gold" className="h-10 w-auto" />
          <p className="font-body text-sm text-secondary-foreground/40 tracking-wide">
            © {new Date().getFullYear()} Ice Realty & Management. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-sm text-secondary-foreground/40 hover:text-primary transition-colors duration-300 tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
