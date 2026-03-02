import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "./SectionWrapper";

const ContactSection = () => (
  <SectionWrapper id="contacto" title="Contacto" subtitle="¿Quieres colaborar o revisar mi trabajo? ¡Escríbeme!">
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" asChild>
          <a href="mailto:tuemail@ejemplo.com?subject=Contacto%20desde%20tu%20portafolio" className="gap-2">
            <Mail size={18} /> Contactar
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="/assets/pdf/cv-francisco-izaguirre.pdf" download className="gap-2">
            <FileText size={18} /> Ver CV
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="gap-2">
            <Github size={18} /> GitHub
          </a>
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
        <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-foreground" aria-label="Perfil de LinkedIn">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href="mailto:tuemail@ejemplo.com" className="flex items-center gap-1.5 transition-colors hover:text-foreground" aria-label="Enviar correo">
          <Mail size={16} /> tuemail@ejemplo.com
        </a>
        <a href="tel:+51999999999" className="flex items-center gap-1.5 transition-colors hover:text-foreground" aria-label="Llamar por teléfono">
          <Phone size={16} /> +51 999 999 999
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default ContactSection;
