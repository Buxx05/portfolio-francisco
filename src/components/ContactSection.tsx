import { Github, Linkedin, Mail, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "./SectionWrapper";

const ContactSection = () => {
  // Enlace de WhatsApp con un mensaje predeterminado y codificado para URL
  const whatsappLink = "https://wa.me/51986170583?text=Hola%20Francisco,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.";

  return (
    <SectionWrapper id="contacto" title="Contacto" subtitle="¿Listo para empezar un nuevo proyecto? ¡Hablemos!">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/10 bg-muted/30 shadow-lg">
        <div className="flex flex-col items-center gap-8 p-10 text-center md:p-16">
          
          {/* Mensaje principal */}
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl font-bold text-foreground md:text-3xl">
              Construyamos algo increíble juntos
            </h3>
            <p className="text-lg text-muted-foreground">
              Ya sea que tengas una oportunidad laboral, un proyecto de análisis de datos en mente o simplemente quieras saludar, mi bandeja de entrada siempre está abierta.
            </p>
          </div>

          {/* Botones de acción principales */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="gap-2 bg-green-600 text-white transition-all hover:-translate-y-1 hover:bg-green-700 hover:shadow-md dark:bg-green-600 dark:hover:bg-green-700">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </Button>
            
            <Button size="lg" asChild className="gap-2 transition-all hover:-translate-y-1 hover:shadow-md">
              <a
                href="https://mail.google.com/mail/?view=cm&to=fizaguirresonco05@gmail.com&su=Contacto%20desde%20tu%20portafolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} /> Correo Electrónico
              </a>
            </Button>
          </div>

          {/* Enlaces secundarios (Redes y CV) */}
          <div className="mt-4 flex w-full flex-wrap justify-center gap-6 border-t border-border/50 pt-8 text-sm text-muted-foreground sm:gap-10">
            <a
              href="https://linkedin.com/in/franciscoizaguirre05"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-medium transition-colors hover:text-foreground"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Linkedin size={18} />
              </div>
              LinkedIn
            </a>
            
            <a
              href="https://github.com/Buxx05"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-medium transition-colors hover:text-foreground"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Github size={18} />
              </div>
              GitHub
            </a>

            <a
              href="/FranciscoIzaguirreSonco_CV.pdf"
              download
              className="group flex items-center gap-3 font-medium transition-colors hover:text-foreground"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <FileText size={18} />
              </div>
              CV
            </a>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;