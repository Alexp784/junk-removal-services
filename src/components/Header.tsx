import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t("Home", "Inicio"), href: "#hero" },
    { label: t("Services", "Servicios"), href: "#services" },
    { label: t("Pricing", "Precios"), href: "#pricing" },
    { label: t("About", "Nosotros"), href: "#why-us" },
    { label: t("Contact", "Contacto"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground">
              Rapid<span className="text-primary"> Junk Removal</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="card-surface rounded-lg flex overflow-hidden text-xs font-mono">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition-colors duration-200 ${
                  lang === "en" ? "text-primary bg-primary/10" : "text-foreground/50"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1.5 transition-colors duration-200 ${
                  lang === "es" ? "text-primary bg-primary/10" : "text-foreground/50"
                }`}
              >
                ES
              </button>
            </div>

            {/* Call Now */}
            <a href="tel:8137667345" className="hidden sm:flex neon-button !px-5 !py-2.5 text-sm items-center gap-2">
              <Phone className="w-4 h-4" />
              {t("Call Now", "Llamar")}
            </a>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground/70 hover:text-primary transition-colors p-1"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden glass-header border-t border-foreground/5">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-3 px-3 rounded-lg hover:bg-primary/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:8137667345" className="neon-button text-center text-sm mt-2 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              {t("Call Now", "Llamar Ahora")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
