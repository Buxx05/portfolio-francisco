import { ExternalLink, Github, Target, Lightbulb, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import TechBadge from "./TechBadge";

interface Project {
  id: string;
  title: string;
  short: string;
  long?: string;
  challenges?: string;
  learnings?: string;
  tech: string[];
  image: string;
  repoUrl: string;
  demoUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 sm:max-w-3xl overflow-hidden border-primary/20 bg-background/95 backdrop-blur-xl">
        <ScrollArea className="max-h-[85vh] w-full">
          
          {/* Header con Imagen */}
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {project.title}
                </DialogTitle>
              </DialogHeader>
            </div>
          </div>

          <div className="p-6 pt-2 space-y-8">
            {/* Tech Stack */}
            <div className="flex flex-wrap items-center gap-2">
              <Code2 size={16} className="text-muted-foreground mr-1" />
              {project.tech.map((t) => <TechBadge key={t} name={t} />)}
            </div>

            {/* Descripción General */}
            {project.long && (
              <div className="space-y-3">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.long}
                </p>
              </div>
            )}

            {/* Grid de Retos y Aprendizajes */}
            <div className="grid gap-6 md:grid-cols-2">
              {project.challenges && (
                <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                    <Target size={18} className="text-destructive" /> Retos del Proyecto
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.challenges}</p>
                </div>
              )}

              {project.learnings && (
                <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                    <Lightbulb size={18} className="text-yellow-500" /> Aprendizajes
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.learnings}</p>
                </div>
              )}
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <Button asChild className="flex-1 gap-2" size="lg">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={18} /> Ver Código Fuente
                </a>
              </Button>
              {project.demoUrl && (
                <Button variant="secondary" asChild className="flex-1 gap-2" size="lg">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} /> Ver Proyecto en Vivo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;