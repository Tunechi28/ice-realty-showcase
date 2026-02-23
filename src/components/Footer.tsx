import logoPng from "@/assets/logo-gold-cropped.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-primary/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="flex justify-center md:justify-start">
            <img src={logoPng} alt="Ice Realty" className="h-20 w-[220px] object-contain" />
          </div>
          <p className="font-body text-sm text-secondary-foreground/40 tracking-wide text-center">
            © {new Date().getFullYear()} Ice Realty & Management. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center md:justify-end">
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
