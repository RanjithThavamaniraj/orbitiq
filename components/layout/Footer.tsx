import { Orbit } from "lucide-react";

const footerLinks = [
  { label: "Platform", href: "#dashboard" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-burgundy text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Orbit className="h-4 w-4 text-gold" strokeWidth={2} />
              </div>
              <span className="font-display text-xl">OrbitIQ</span>
            </a>
            <p className="mt-6 text-[15px] leading-relaxed text-white/75">
              Community intelligence for operators who care about people, not just metrics.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-white/70 transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/50">
            © {new Date().getFullYear()} OrbitIQ. All rights reserved.
          </p>
          <p className="text-[12px] tracking-wide text-gold/90">
            Crafted for communities that matter
          </p>
        </div>
      </div>
    </footer>
  );
}
