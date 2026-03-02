import { BarChart4, Database, FileSpreadsheet, Terminal, Coffee, Settings2, Globe, Cpu, LayoutTemplate } from "lucide-react";

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
  const getIconAndColor = (tech: string) => {
    const t = tech.toLowerCase();
    
    // Asignación de iconos y colores según la tecnología
    if (t.includes("power bi")) return { Icon: BarChart4, color: "text-yellow-500" };
    if (t.includes("excel")) return { Icon: FileSpreadsheet, color: "text-green-500" };
    if (t.includes("sql") || t.includes("database")) return { Icon: Database, color: "text-blue-400" };
    if (t.includes("python")) return { Icon: Terminal, color: "text-blue-500" };
    if (t.includes("java") && !t.includes("script")) return { Icon: Coffee, color: "text-orange-500" };
    if (t.includes("power query")) return { Icon: Settings2, color: "text-yellow-600" };
    if (t.includes("html") || t.includes("css") || t.includes("web")) return { Icon: Globe, color: "text-orange-400" };
    if (t.includes("ui") || t.includes("ux")) return { Icon: LayoutTemplate, color: "text-pink-400" };
    
    // Default
    return { Icon: Cpu, color: "text-primary" };
  };

  const { Icon, color } = getIconAndColor(name);

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary">
      <Icon size={14} className={color} />
      {name}
    </span>
  );
};

export default TechBadge;