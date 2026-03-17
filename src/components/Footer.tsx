import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-foreground/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <span className="font-bold text-xl tracking-tight block mb-4">
              Rapid<span className="text-primary"> Junk Removal</span>
            </span>
            <p className="text-sm text-foreground/50 leading-relaxed">
              {t(
                "Tampa's trusted junk removal service. Fast, affordable, and eco-friendly.",
                "El servicio de remoción de basura de confianza en Tampa. Rápido, económico y ecológico."
              )}
            </p>
          </div>

          <div>
            <h4 className="label-mono mb-4">{t("Quick Links", "Enlaces")}</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: t("Home", "Inicio"), href: "#hero" },
                { label: t("Services", "Servicios"), href: "#services" },
                { label: t("Pricing", "Precios"), href: "#pricing" },
                { label: t("Contact", "Contacto"), href: "#contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-foreground/50 hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="label-mono mb-4">{t("Contact", "Contacto")}</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:8137667345" className="text-sm text-foreground/50 hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> 813-766-7345
              </a>
              <a href="mailto:info@rapidjunkremovaltampa.com" className="text-sm text-foreground/50 hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@rapidjunkremovaltampa.com
              </a>
              <span className="text-sm text-foreground/50 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Tampa, FL
              </span>
            </div>
          </div>

          <div>
            <h4 className="label-mono mb-4">{t("Hours", "Horario")}</h4>
            <p className="text-sm text-foreground/50 flex items-center gap-2">
              <span className="pulse-dot" />
              {t("Available 24/7", "Disponible 24/7")}
            </p>
          </div>
        </div>

        <div className="border-t border-foreground/5 pt-8 text-center">
          <p className="text-xs text-foreground/30">
            © {new Date().getFullYear()} Rapid Junk Removal Tampa. {t("All rights reserved.", "Todos los derechos reservados.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
