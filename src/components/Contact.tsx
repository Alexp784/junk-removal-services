import { useState, FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-14"
        >
          <span className="label-mono mb-4 block">{t("Get In Touch", "Contáctenos")}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-balance">
            {t("Request a Free Quote", "Solicita una Cotización Gratis")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="card-surface rounded-3xl p-8 sm:p-10"
        >
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">
                {t("Thank You!", "¡Gracias!")}
              </h3>
              <p className="text-foreground/60">
                {t(
                  "We'll get back to you shortly.",
                  "Nos pondremos en contacto pronto."
                )}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  placeholder={t("Your Name", "Tu Nombre")}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
                <input
                  type="tel"
                  required
                  placeholder={t("Phone Number", "Teléfono")}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
              </div>
              <input
                type="email"
                placeholder={t("Email (optional)", "Correo (opcional)")}
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
              <textarea
                rows={4}
                required
                placeholder={t("Describe your junk removal needs...", "Describe lo que necesitas remover...")}
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <button type="submit" className="neon-button flex-1 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {t("Submit", "Enviar")}
                </button>
                <a href="tel:8137667345" className="outline-button flex-1 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  {t("Call Now", "Llamar Ahora")}
                </a>
                <a href="sms:8137667345" className="ghost-button flex-1 flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  {t("Text Us", "Enviar SMS")}
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
