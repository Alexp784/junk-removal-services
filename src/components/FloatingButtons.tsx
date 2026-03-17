import { Phone, MessageSquare } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 sm:hidden">
      <a
        href="sms:8137667345"
        className="w-14 h-14 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
        aria-label="Text Us"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
      <a
        href="tel:8137667345"
        className="w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground transition-all duration-200 hover:scale-105"
        aria-label="Call Now"
        style={{
          background: "hsl(110, 100%, 54%)",
          boxShadow: "0 0 25px rgba(57, 255, 20, 0.4)",
        }}
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
