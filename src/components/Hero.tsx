import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import fotoPerfil from "./images/foto-perfil.jpg";

interface HeroProps {
  photoSrc?: string;
  email?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const GMAIL_LINK = "https://mail.google.com/mail/?view=cm&to=fizaguirresonco05@gmail.com&su=Contacto%20desde%20tu%20portafolio";

const Hero = ({
  photoSrc = fotoPerfil,
}: HeroProps) => {
  const scrollToProjects = () => {
    document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background py-20 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 md:flex-row md:gap-16">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary md:mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponible para empleo · Lima, Perú
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-3 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Francisco Izaguirre
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-4 text-base font-semibold uppercase tracking-widest text-primary/80 md:text-sm"
          >
            Ingeniería de Sistemas & Análisis de Datos
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-lg text-muted-foreground md:text-lg"
          >
            Convierto datos complejos en decisiones estratégicas y construyo
            soluciones de software robustas — desde la arquitectura hasta el despliegue en producción.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 sm:flex-row md:items-start"
          >
            <Button size="lg" onClick={scrollToProjects} className="gap-2">
              Ver proyectos <ArrowDown size={16} />
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href={GMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Mail size={16} /> Contacto
              </a>
            </Button>

            <Button size="lg" variant="ghost" asChild>
              <a href="/FranciscoIzaguirreSonco_CV.pdf" download className="gap-2">
                <Download size={16} /> Descargar CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-sm" />
          <Avatar className="relative h-40 w-40 border-4 border-background shadow-2xl md:h-56 md:w-56">
            <AvatarImage src={photoSrc} alt="Francisco Izaguirre" />
            <AvatarFallback className="bg-primary/10 text-4xl font-bold text-primary md:text-5xl">
              FI
            </AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;