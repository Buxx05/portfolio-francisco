import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{project.title}</DialogTitle>
          <DialogDescription>{project.short}</DialogDescription>
        </DialogHeader>

        <div className="aspect-video overflow-hidden rounded-lg bg-muted">
          <img src={project.image} alt={`Detalle del proyecto ${project.title}`} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>

        {project.long && (
          <div>
            <h3 className="mb-1 font-semibold text-foreground">Descripción</h3>
            <p className="text-sm text-muted-foreground">{project.long}</p>
          </div>
        )}

        {project.challenges && (
          <div>
            <h3 className="mb-1 font-semibold text-foreground">Retos</h3>
            <p className="text-sm text-muted-foreground">{project.challenges}</p>
          </div>
        )}

        {project.learnings && (
          <div>
            <h3 className="mb-1 font-semibold text-foreground">Aprendizajes</h3>
            <p className="text-sm text-muted-foreground">{project.learnings}</p>
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <Button variant="outline" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> Ver repositorio
            </a>
          </Button>
          {project.demoUrl && (
            <Button asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} /> Ver demo
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
