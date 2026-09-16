import { Sparkles } from "lucide-react";

/**
 * S3a3c — Jensen Huang quote bridge.
 * "IT will become the HR of AI agents" — flips the frame for HR leaders.
 */
export const ITIsHRofAISlide = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 py-10 animate-fade-in select-none">
      <div className="w-full max-w-7xl mx-auto text-center space-y-12">
        <div className="flex items-center justify-center gap-2 text-secondary">
          <Sparkles className="h-4 w-4" />
          <span className="uppercase tracking-[0.3em] text-xs font-semibold">
            Jensen Huang · Nvidia · CES 2025
          </span>
        </div>

        <blockquote className="slide-title-lg font-display font-bold leading-[1.05] text-foreground">
          <span className="slide-title-lg text-primary leading-none">“</span>
          <span className="text-primary italic">IT</span> will become the{" "}
          <span className="text-primary italic">HR of AI agents.</span>
          <span className="slide-title-lg text-primary leading-none">”</span>
        </blockquote>

      </div>
    </div>
  );
};
