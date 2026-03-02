import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, subtitle, children, className }: SectionWrapperProps) => (
  <section id={id} className={`py-16 md:py-24 ${className ?? ""}`}>
    <div className="container mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-2 text-3xl font-bold text-foreground">{title}</h2>
        {subtitle && <p className="mb-10 text-muted-foreground">{subtitle}</p>}
        {!subtitle && <div className="mb-10" />}
      </motion.div>
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
