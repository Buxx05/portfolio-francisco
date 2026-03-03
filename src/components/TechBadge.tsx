import { Code2, LayoutTemplate } from "lucide-react";

interface TechBadgeProps {
  name: string;
  showLabel?: boolean; // Nueva propiedad para controlar si se muestra el texto
}

const getTechData = (tech: string) => {
  const t = tech.toLowerCase();
  
  // Diccionario de logos con colores originales en SVG
  const logos: Record<string, string> = {
    // Análisis de Datos
    "power bi": "https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000", 
    "power query": "https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000",
    "excel": "https://img.icons8.com/?size=100&id=y5utoW4FUM92&format=png&color=000000",
    "sql server": "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000",
    "mysql": "https://img.icons8.com/?size=100&id=hYoELNwniGhi&format=png&color=000000",
    "sql": "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000",
    
    // Desarrollo Backend & Frontend
    "python": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    "java": "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
    "c#": "https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000",
    "php": "https://img.icons8.com/?size=100&id=f0R4xVI4Sc8O&format=png&color=000000",
    "flask": "https://img.icons8.com/?size=100&id=TtXEs5SeYLG8&format=png&color=000000",
    "html": "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    "css": "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    "javascript": "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    "react": "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
    "typescript": "https://cdn.simpleicons.org/typescript/3178C6",
    "tailwind css": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "supabase": "https://cdn.simpleicons.org/supabase/3ECF8E",
    
    // Herramientas y Otros
    "godot": "https://img.icons8.com/?size=100&id=UGrLCnKJf6Px&format=png&color=000000",
    "json": "https://img.icons8.com/?size=100&id=T46NNXhv79TD&format=png&color=000000",
    "jwt": "https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000",
    "git": "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    "github": "https://img.icons8.com/?size=100&id=4Z2nCrz5iPY2&format=png&color=000000",
  };

  const matchedKey = Object.keys(logos).find(key => t === key) || Object.keys(logos).find(key => t.includes(key));
  
  if (matchedKey) {
    return { isImage: true, src: logos[matchedKey] };
  }

  if (t.includes("ui") || t.includes("ux")) return { isImage: false, Icon: LayoutTemplate };
  return { isImage: false, Icon: Code2 };
};

const TechBadge = ({ name, showLabel = false }: TechBadgeProps) => {
  const data = getTechData(name);

  // Si showLabel es true, aplicamos los estilos de "píldora" (pill)
  if (showLabel) {
    return (
      <span 
        className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 pl-1 pr-3 py-1 text-xs font-medium text-secondary-foreground shadow-sm"
        title={name}
      >
        {data.isImage ? (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full p-[3px]">
            <img src={data.src} alt={name} className="h-full w-full object-contain" />
          </span>
        ) : (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            {data.Icon && <data.Icon size={14} />}
          </span>
        )}
        <span className="leading-none">{name}</span>
      </span>
    );
  }

  // Si showLabel es false (en las tarjetas), mostramos solo el icono circular
  return (
    <span 
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/20 p-1.5 transition-transform hover:-translate-y-1 hover:bg-secondary/40 shadow-sm"
      title={name}
      aria-label={`Tecnología: ${name}`}
    >
      {data.isImage ? (
        <img src={data.src} alt={name} className="h-full w-full object-contain drop-shadow-sm" loading="lazy" />
      ) : (
        <span className="text-primary">
          {data.Icon && <data.Icon size={18} />}
        </span>
      )}
    </span>
  );
};

export default TechBadge;