import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import CertCard, { Cert } from "@/components/CertCard"; // Asegúrate de haber exportado Cert en CertCard.tsx
import CertModal from "@/components/CertModal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, Users, MessageSquare, Lightbulb, RefreshCw, CalendarCheck, Brain, Globe } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TechBadge from "@/components/TechBadge";
import projectsData from "@/data/projects.json";
import certsData from "@/data/certs.json";
import skillsData from "@/data/skills.json";

// Definimos la interfaz Project localmente para evitar errores de TypeScript
interface Project {
  id: string;
  title: string;
  short: string;
  long?: string;
  challenges?: string;
  learnings?: string;
  tech: string[];
  image: string;
  gallery?: string[];
  repoUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

const softIcons: Record<string, React.ReactNode> = {
  Users: <Users size={20} />,
  MessageSquare: <MessageSquare size={20} />,
  Lightbulb: <Lightbulb size={20} />,
  RefreshCw: <RefreshCw size={20} />,
  CalendarCheck: <CalendarCheck size={20} />,
  Brain: <Brain size={20} />,
};

const levelColor: Record<string, string> = {
  "Básico": "bg-muted text-muted-foreground",
  "Intermedio": "bg-primary/10 text-primary",
  "Avanzado": "bg-primary/20 text-primary font-semibold",
};

const Index = () => {
  // 1. Filtramos los proyectos directamente del JSON importado
  const featured = (projectsData as Project[]).filter((p) => p.featured);
  const others = (projectsData as Project[]).filter((p) => !p.featured);

  // 2. Estados para los Modales
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
  
  // 3. Estado para el filtro de certificaciones (Por defecto "curso")
  const [certFilter, setCertFilter] = useState<"curso" | "voluntariado">("curso");

  // 4. Filtramos las certificaciones en vivo según el botón seleccionado
  const filteredCerts = (certsData as Cert[]).filter((cert) => cert.type === certFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main id="main">
        <Hero />

        {/* Proyectos */}
        <SectionWrapper id="proyectos" title="Proyectos" subtitle="Algunos de los proyectos en los que he trabajado.">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Proyectos Destacados</h3>
          <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} onReadMore={() => setSelectedProject(p)} />
            ))}
          </div>

          {others.length > 0 && (
            <>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Otros Proyectos</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((p) => (
                  <ProjectCard key={p.id} project={p} compact />
                ))}
              </div>
            </>
          )}
        </SectionWrapper>

        <ProjectModal
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        />

        {/* Certificaciones y Voluntariados */}
        <SectionWrapper 
          id="certificaciones" 
          title="Certificaciones y Voluntariados" 
          subtitle="Validación de mis conocimientos y compromiso social." 
          className="bg-muted/30"
          headerAction={
            <div className="flex w-full sm:w-auto items-center rounded-lg bg-background p-1.5 border border-border/50 shadow-sm">
              <button
                onClick={() => setCertFilter("curso")}
                className={`flex-1 sm:flex-none rounded-md px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  certFilter === "curso" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                Cursos & Especializaciones
              </button>
              <button
                onClick={() => setCertFilter("voluntariado")}
                className={`flex-1 sm:flex-none rounded-md px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  certFilter === "voluntariado" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                Voluntariados
              </button>
            </div>
          }
        >
          {/* Contenedor del Carrusel Filtrado */}
          {filteredCerts.length > 0 ? (
            <div className="relative px-2 sm:px-16">
              <Carousel
                opts={{
                  align: "start",
                  // Si quieres que al darle a la flecha salte exactamente de 3 en 3, descomenta la siguiente línea:
                  // slidesToScroll: "auto", 
                }}
                className="w-full"
              >
                {/* -ml-4 compensa el espacio interior para que quede alineado a la izquierda */}
                <CarouselContent className="-ml-4 py-4">
                  {filteredCerts.map((c) => (
                    <CarouselItem key={c.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                      {/* Envolvemos la tarjeta para darle altura completa y que las sombras no se corten */}
                      <div className="h-full flex">
                        <CertCard cert={c} onClick={() => setSelectedCert(c)} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Solo mostramos las flechas en pantallas de PC (en móvil se desliza con el dedo) */}
                {filteredCerts.length > 3 && (
                  <>
                    <CarouselPrevious className="hidden sm:flex -left-10 md:-left-14 h-10 w-10 hover:bg-primary/10 transition-colors" />
                    <CarouselNext className="hidden sm:flex -right-10 md:-right-14 h-10 w-10 hover:bg-primary/10 transition-colors" />
                  </>
                )}
              </Carousel>
            </div>
          ) : (
            <div className="py-12 text-center text-muted-foreground bg-background rounded-lg border border-dashed border-border/50">
              Próximamente agregaré más información en esta categoría.
            </div>
          )}
        </SectionWrapper>

        <CertModal
          cert={selectedCert}
          open={!!selectedCert}
          onOpenChange={(open) => !open && setSelectedCert(null)}
        />

        {/* Sobre mí */}
        <SectionWrapper id="sobre-mi" title="Sobre mí" subtitle="Un poco sobre mi trayectoria y lo que me apasiona.">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            
            {/* Columna Izquierda: Texto */}
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                ¡Hola! Soy Francisco, estudiante de 8° ciclo de <strong className="font-medium text-foreground">Ingeniería de Sistemas e Informática en la UTP</strong>. Me considero un profesional puente entre dos mundos que me apasionan: el análisis de datos y el desarrollo de software.
              </p>
              <p>
                A lo largo de mi formación, me he enfocado en construir soluciones tecnológicas completas: desde el diseño de la arquitectura y la programación de sistemas web, hasta la estructuración de procesos ETL y la creación de dashboards interactivos. 
              </p>
              <p>
                Mi experiencia en <strong className="font-medium text-foreground">proyectos reales como personales</strong>, me ha enseñado que los números por sí solos no bastan; el verdadero valor está en usar la tecnología para generar un impacto positivo y tomar mejores decisiones estratégicas.
              </p>
              <p>
                Actualmente estoy en búsqueda de oportunidades donde pueda aportar mis capacidades analíticas, enfrentar nuevos retos y seguir creciendo en equipo.
              </p>

            </div>

            {/* Columna Derecha: Imagen de Tecnología/Datos */}
            <div className="relative group order-first md:order-last">
              {/* Resplandor decorativo de fondo */}
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/30 to-secondary/30 opacity-50 blur-2xl transition-all duration-500 group-hover:opacity-80"></div>
              
              {/* Contenedor de la imagen */}
              <div className="relative aspect-video md:aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 bg-muted shadow-2xl">
                {/* Usamos una imagen de Unsplash libre de derechos enfocada en código y datos.
                  Si quieres otra, solo cambia este link.
                */}
                <img 
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Análisis de Datos y Desarrollo" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Capa de color (Overlay) para que la imagen se integre al modo oscuro/claro de tu portafolio */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent"></div>
              </div>
            </div>

          </div>
        </SectionWrapper>

        {/* Habilidades y Competencias */}
        <SectionWrapper id="habilidades" title="Habilidades y Competencias" subtitle="Mi stack tecnológico y herramientas personales." className="bg-muted/30">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Columna Izquierda: Stack Técnico (Ocupa 7 columnas de 12) */}
            <div className="space-y-10 lg:col-span-8">
              {skillsData.technical.map((cat) => (
                <div key={cat.category}>
                  <h3 className="mb-5 flex items-center text-sm font-bold uppercase tracking-widest text-primary">
                    <span className="mr-3 h-px w-8 bg-primary/30"></span>
                    {cat.category}
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                    {cat.items.map((item) => (
                      <div key={item.name} className="flex items-center gap-3 transition-transform hover:-translate-y-1">
                        {/* Reutilizamos el TechBadge solo para mostrar el icono circular */}
                        <TechBadge name={item.name} showLabel={false} />
                        <div>
                          <p className="font-semibold leading-none text-foreground">{item.name}</p>
                          <p className="mt-1.5 text-xs text-muted-foreground">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Columna Derecha: Blandas e Idiomas (Ocupa 5 columnas de 12) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 rounded-2xl border border-primary/10 bg-background/50 p-6 shadow-sm backdrop-blur-sm md:p-8">
                
                {/* Idiomas */}
                <div className="mb-10">
                  <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                    <Globe size={18} /> Idiomas
                  </h3>
                  <ul className="space-y-4">
                    {skillsData.languages.map((lang) => (
                      <li key={lang.name} className="flex items-center justify-between border-b border-border/40 pb-3 last:border-0 last:pb-0">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                          {lang.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Blandas */}
                <div>
                  <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                    <Users size={18} /> Competencias
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {skillsData.soft.map((s) => (
                      <li key={s.name} className="flex items-center gap-3 rounded-lg border border-transparent hover:border-border/50 hover:bg-muted/30 p-2 transition-colors">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {/* Ajustamos el tamaño del icono de Lucide */}
                          <div className="scale-75">
                            {softIcons[s.icon] ?? <Brain size={20} />}
                          </div>
                        </span>
                        <span className="text-sm font-medium text-foreground">{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </SectionWrapper>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;