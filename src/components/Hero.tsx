import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 md:flex-row md:gap-16">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary/70">
            Portafolio
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Francisco Izaguirre
          </h1>
          <p className="mb-2 text-lg font-medium text-primary md:text-xl">
            Estudiante de Ingeniería de Sistemas — Análisis de Datos &amp; Desarrollo Backend
          </p>
          <p className="mb-8 max-w-lg text-muted-foreground md:text-lg">
            Transformo datos en información útil para la toma de decisiones.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <Button size="lg" onClick={scrollToProjects} className="gap-2">
              Ver proyectos <ArrowDown size={16} />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:tuemail@ejemplo.com?subject=Contacto%20desde%20tu%20portafolio" className="gap-2">
                <Mail size={16} /> Contacto
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* COPY: Reemplaza este avatar con tu foto de perfil */}
          <Avatar className="h-40 w-40 border-4 border-primary/10 shadow-xl md:h-56 md:w-56">
            <AvatarFallback className="bg-primary/5 text-4xl font-bold text-primary md:text-5xl">
              FI
            </AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
