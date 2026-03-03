import { Award, HeartHandshake, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Cert } from "./CertCard"; // Importamos la interfaz desde la tarjeta

interface CertModalProps {
  cert: Cert | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CertModal = ({ cert, open, onOpenChange }: CertModalProps) => {
  if (!cert) return null;

  const isVoluntariado = cert.type === "voluntariado";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl border-primary/20 bg-background/95 backdrop-blur-xl p-0 overflow-hidden flex flex-col h-[90vh] md:h-[85vh]">
        
        <DialogHeader className="p-6 pb-4 shrink-0 border-b border-border/50">
          <DialogTitle className="flex items-center gap-2 text-xl md:text-2xl">
            {isVoluntariado ? <HeartHandshake className="text-rose-500 shrink-0" /> : <Award className="text-primary shrink-0" />}
            {cert.name}
          </DialogTitle>
          <p className="text-muted-foreground mt-1">
            {cert.issuer} • {cert.date}
          </p>
        </DialogHeader>

        {/* Visor de PDF */}
        <div className="flex-1 w-full bg-muted/30 relative">
          <iframe 
            src={`${cert.pdfUrl}#toolbar=0`} 
            className="w-full h-full absolute inset-0 border-0"
            title={`Documento PDF de ${cert.name}`}
          />
        </div>

        {/* Botón Inferior */}
        <div className="flex items-center justify-center border-t border-border p-4 bg-muted/10 shrink-0">
          <Button asChild variant="default" className="gap-2">
            <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
              <FileText size={16} /> Abrir PDF Completo
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertModal;