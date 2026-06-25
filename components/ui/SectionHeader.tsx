import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  index?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  index,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn("mb-16 lg:mb-20", align === "center" && "text-center", className)}>
      <div
        className={cn(
          "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
          align === "center" && "lg:flex-col lg:items-center"
        )}
      >
        <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
          <div className="mb-5 flex items-center gap-4">
            {index && (
              <span className="font-mono text-[11px] tracking-widest text-burgundy/40">
                SYS.{index}
              </span>
            )}
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
              {label}
            </span>
          </div>
          <h2 className="font-display text-[2.25rem] leading-[1.1] text-burgundy-deep sm:text-4xl lg:text-[2.875rem]">
            {title}
          </h2>
        </div>
        {description && (
          <p
            className={cn(
              "max-w-md text-[15px] leading-relaxed text-muted lg:pb-1",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
      <div className="relative mt-10 flex items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-gold/50 via-burgundy/20 to-transparent" />
        <span className="font-mono text-[8px] tracking-[0.3em] text-burgundy/30">◆</span>
      </div>
    </FadeIn>
  );
}
