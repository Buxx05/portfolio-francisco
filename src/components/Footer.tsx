const links = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-muted/50 py-8">
      <div className="container mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-muted-foreground">
        <nav aria-label="Navegación del footer">
          <ul className="flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <button onClick={() => scrollTo(l.href)} className="transition-colors hover:text-foreground">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <p>© {new Date().getFullYear()} Francisco Izaguirre. Todos los derechos reservados.</p>
        <p className="text-xs">Hecho con React + Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
