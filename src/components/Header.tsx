import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Ir al contenido principal
      </a>
      <nav className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4" aria-label="Navegación principal">
        <button onClick={() => scrollTo("#hero")} className="text-lg font-bold text-foreground">
          Francisco Izaguirre
        </button>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <Button size="sm" asChild>
              <a href="mailto:tuemail@ejemplo.com?subject=Contacto%20desde%20tu%20portafolio">Contactar</a>
            </Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-md p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="w-full rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <Button className="w-full" size="sm" asChild>
                <a href="mailto:tuemail@ejemplo.com?subject=Contacto%20desde%20tu%20portafolio">Contactar</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
