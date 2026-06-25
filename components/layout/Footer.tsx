import { Orbit } from "lucide-react";

const footerLinks = [
  { label: "Platform", href: "#dashboard" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Documentation", href: "#architecture" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-burgundy-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Orbit className="h-4 w-4 text-gold" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold tracking-tight">OrbitIQ</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Community intelligence platform that transforms Discord activity into
              actionable insights through enterprise data infrastructure and AI.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 h-px bg-white/10" />

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-white/50">
            © {new Date().getFullYear()} OrbitIQ
          </p>
          <p className="font-mono text-[11px] text-gold/80">
            Discord → Airflow → Databricks → Snowflake → Insight
          </p>
        </div>
      </div>
    </footer>
  );
}
