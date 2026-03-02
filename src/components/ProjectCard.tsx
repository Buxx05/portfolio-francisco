import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "@/components/TechBadge";

interface Project {
  id: string;
  title: string;
  short: string;
  tech: string[];
  image: string;
  repoUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  onReadMore?: () => void;
  compact?: boolean;
}

const ProjectCard = ({ project, onReadMore, compact }: ProjectCardProps) => {
  if (compact) {
    return (
      <Card className="flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-2">
          <p className="line-clamp-2 text-sm text-muted-foreground">{project.short}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => <TechBadge key={t} name={t} />)}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button size="sm" variant="outline" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositorio de ${project.title}`}>
              <Github size={14} /> Repo
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-primary/10">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {/* Efecto de zoom en la imagen al hacer hover */}
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3 mb-4">{project.short}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => <TechBadge key={t} name={t} />)}
        </div>
      </CardContent>
      <CardFooter className="gap-3 pt-4 border-t border-border/50">
        {onReadMore && (
          <Button size="sm" onClick={onReadMore} className="w-full gap-2">
            Ver Detalles <ArrowRight size={16} />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
