import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card className="flex flex-col transition-shadow hover:shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-2">
          <p className="line-clamp-2 text-sm text-muted-foreground">{project.short}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
            ))}
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
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className="aspect-video bg-muted">
        <img src={project.image} alt={`Captura del proyecto ${project.title}`} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{project.short}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-wrap gap-2">
        <Button size="sm" variant="outline" asChild>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositorio de ${project.title}`}>
            <Github size={14} /> Ver repo
          </a>
        </Button>
        {project.demoUrl && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${project.title}`}>
              <ExternalLink size={14} /> Demo
            </a>
          </Button>
        )}
        {onReadMore && (
          <Button size="sm" onClick={onReadMore}>
            Leer más
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
