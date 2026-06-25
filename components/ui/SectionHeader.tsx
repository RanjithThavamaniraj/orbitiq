import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  index?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  index,
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn("mb-20 lg:mb-24", className)}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-4">
            {index && (
              <span className="font-mono text-5xl font-light leading-none tracking-tighter text-burgundy/[0.08] sm:text-6xl">
                {index}
              </span>
            )}
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-burgundy">
              {label}
            </span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {title}
          </h2>
        </div>
        {description && (
          <p className="max-w-md text-sm leading-relaxed text-muted lg:pb-1 lg:text-base">
            {description}
          </p>
        )}
      </div>
      <div className="editorial-rule mt-10" />
    </FadeIn>
  );
}
