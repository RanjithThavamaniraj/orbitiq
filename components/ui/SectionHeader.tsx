import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  index?: string;
  className?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeader({
  label,
  title,
  description,
  index,
  className,
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <FadeIn className={cn("mb-7 lg:mb-9", align === "center" && "text-center", className)}>
      <div
        className={cn(
          "flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-6",
          align === "center" && "lg:flex-col lg:items-center"
        )}
      >
        <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
          <div className="mb-3 flex items-center gap-3">
            {index && (
              <span
                className={cn(
                  "font-mono text-[11px] tracking-widest",
                  isDark ? "text-white/45" : "text-burgundy/60"
                )}
              >
                SYS.{index}
              </span>
            )}
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
              {label}
            </span>
          </div>
          <h2
            className={cn(
              "font-display text-[2rem] leading-[1.12] sm:text-[2.25rem] lg:text-[2.5rem]",
              isDark ? "text-white" : "text-burgundy-deep"
            )}
          >
            {title}
          </h2>
        </div>
        {description && (
          <p
            className={cn(
              "max-w-md shrink-0 text-[14px] leading-relaxed lg:max-w-sm lg:pb-0.5 lg:text-[15px]",
              align === "center" && "mx-auto",
              isDark ? "text-white/55" : "text-muted"
            )}
          >
            {description}
          </p>
        )}
      </div>
      <div className="relative mt-4 flex items-center gap-3">
        <span
          className={cn(
            "h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent",
            !isDark && "via-burgundy/20"
          )}
        />
        <span
          className={cn(
            "font-mono text-[8px] tracking-[0.3em]",
            isDark ? "text-gold/50" : "text-burgundy/50"
          )}
        >
          ◆
        </span>
      </div>
    </FadeIn>
  );
}
