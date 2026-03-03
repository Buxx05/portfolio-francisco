import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode; // <- ¡Nueva propiedad para poner botones a la derecha!
}

const SectionWrapper = ({ id, title, subtitle, children, className, headerAction }: SectionWrapperProps) => (
  <section id={id} className={`py-16 md:py-24 ${className ?? ""}`}>
    <div className="container mx-auto max-w-6xl px-4">
      
      {/* Contenedor de Cabecera (Título a la izq, Botones a la der) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <h2 className="mb-2 text-3xl font-bold text-foreground">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        
        {/* Si le pasamos botones, los dibuja aquí a la derecha */}
        {headerAction && (
          <div className="w-full sm:w-auto">
            {headerAction}
          </div>
        )}
      </motion.div>

      {/* Contenido principal (Las tarjetas) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default SectionWrapper;