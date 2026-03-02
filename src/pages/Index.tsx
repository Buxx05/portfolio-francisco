import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import CertCard from "@/components/CertCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText, Users, MessageSquare, Lightbulb, RefreshCw, CalendarCheck, Brain, Globe } from "lucide-react";

import projectsData from "@/data/projects.json";
import certsData from "@/data/certs.json";
import skillsData from "@/data/skills.json";

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
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);

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

        {/* Certificaciones */}
        <SectionWrapper id="certificaciones" title="Certificaciones" subtitle="Formación complementaria y certificaciones obtenidas." className="bg-muted/30">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certsData.map((c) => (
              <CertCard key={c.id} cert={c} />
            ))}
          </div>
        </SectionWrapper>

        {/* Sobre mí */}
        <SectionWrapper id="sobre-mi" title="Sobre mí">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <Avatar className="h-32 w-32 shrink-0 border-4 border-primary/10 shadow-lg">
              <AvatarFallback className="bg-primary/5 text-3xl font-bold text-primary">FI</AvatarFallback>
            </Avatar>
            <div className="max-w-2xl space-y-4 text-muted-foreground">
              {/* COPY: Edita tu biografía aquí */}
              <p>
                Soy estudiante del 8° ciclo de Ingeniería de Sistemas en la UTP, con experiencia en gestión de inventarios y proyectos académicos en Java, Python y SQL. Me apasiona transformar datos en información accionable y construir soluciones tecnológicas que resuelvan problemas reales.
              </p>
              <p>
                He desarrollado dashboards analíticos, APIs REST y aplicaciones de escritorio, siempre buscando aplicar buenas prácticas de ingeniería de software. Mi enfoque combina pensamiento analítico con habilidades técnicas sólidas.
              </p>
              <p>
                Actualmente busco oportunidades como analista de datos o desarrollador backend junior, donde pueda aportar valor desde el primer día y seguir creciendo profesionalmente.
              </p>
              <Button variant="outline" asChild className="mt-2">
                <a href="/assets/pdf/cv-francisco-izaguirre.pdf" download className="gap-2">
                  <FileText size={16} /> Descargar CV
                </a>
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* Habilidades Técnicas */}
        <SectionWrapper id="habilidades" title="Habilidades Técnicas" subtitle="Tecnologías y herramientas con las que trabajo." className="bg-muted/30">
          <div className="grid gap-8 md:grid-cols-2">
            {skillsData.technical.map((cat) => (
              <div key={cat.category}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm ${levelColor[item.level] ?? "bg-muted text-muted-foreground"}`}
                    >
                      {item.name}
                      <span className="text-xs opacity-70">· {item.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Habilidades Blandas */}
        <SectionWrapper id="habilidades-blandas" title="Habilidades Blandas">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillsData.soft.map((s) => (
              <Card key={s.name} className="transition-shadow hover:shadow-md">
                <CardContent className="flex items-start gap-3 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {softIcons[s.icon] ?? <Users size={20} />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.name}</h3>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        {/* Idiomas */}
        <SectionWrapper id="idiomas" title="Idiomas" className="bg-muted/30">
          <div className="flex flex-wrap gap-4">
            {skillsData.languages.map((lang) => (
              <Card key={lang.name} className="min-w-[200px]">
                <CardContent className="flex items-center gap-3 p-5">
                  <Globe size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{lang.name}</p>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
