import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Cert {
  id: string;
  name: string;
  issuer: string;
  year: number;
  file: string;
}

const CertCard = ({ cert }: { cert: Cert }) => (
  <Card className="transition-shadow hover:shadow-md">
    <CardContent className="flex items-start gap-4 p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Award size={20} />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{cert.name}</h3>
        <p className="text-sm text-muted-foreground">{cert.issuer} · {cert.year}</p>
      </div>
      <Button size="icon" variant="ghost" asChild aria-label={`Descargar certificado ${cert.name}`}>
        <a href={cert.file} download>
          <Download size={16} />
        </a>
      </Button>
    </CardContent>
  </Card>
);

export default CertCard;
