import { Award, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface Cert {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  pdfUrl: string;
  type: "curso" | "voluntariado";
}

interface CertCardProps {
  cert: Cert;
  onClick: () => void;
}

const CertCard = ({ cert, onClick }: CertCardProps) => {
  const isVoluntariado = cert.type === "voluntariado";

  return (
    <Card 
      className="group flex cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-primary/10 h-full"
      onClick={onClick}
    >
      <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden border-b border-border/50">
        <img 
          src={cert.image} 
          alt={cert.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
      </div>
      
      <CardHeader className="pb-2 pt-4">
        <CardTitle className="line-clamp-2 text-base leading-snug">
          {cert.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 pb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {isVoluntariado ? (
            <HeartHandshake size={15} className="text-rose-500" />
          ) : (
            <Award size={15} className="text-primary/80" />
          )}
          <span className="font-medium text-foreground/80">{cert.issuer}</span>
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">{cert.date}</p>
      </CardContent>
    </Card>
  );
};

export default CertCard;