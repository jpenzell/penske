import { Citation } from "@/components/blocks/Citation";

const BARS = [
  {
    label: "Work that splits",
    detail: "Financial analysis — revenue, costs, comparisons, at once",
    value: "+81%",
    tone: "primary" as const,
    width: 100,
  },
  {
    label: "Work that has an order",
    detail: "Planning — each step depends on the last",
    value: "−70%",
    tone: "down" as const,
    width: 86,
  },
];

/**
 * Casting, part two: ensemble SIZE. Google Research, 180 agent configurations.
 * More cast only helps when the work splits — and an orchestrator is the
 * difference between a 17x and a 4x error blowup.
 */
export const EnsembleSizeSlide = () => (
  <div className="flex-1 flex flex-col items-center justify-center animate-fade-in px-10 py-8">
    <div className="w-full max-w-6xl space-y-7">
      <div className="text-center space-y-3">
        <div className="slide-kicker text-secondary font-bold tracking-[0.25em]">
          Casting · the evidence
        </div>
        <h1 className="slide-subtitle font-display font-bold text-foreground">
          A bigger cast is not{" "}
          <span className="text-primary italic">a better cast.</span>
        </h1>
        <p className="slide-caption text-muted-foreground">
          180 configurations. Same models. Only the shape of the ensemble changed.
        </p>
      </div>

      <div className="space-y-5">
        {BARS.map((bar) => (
          <div key={bar.label} className="flex items-center gap-6">
            <div className="w-[38%] text-right">
              <div
                className={`slide-body font-display font-bold ${
                  bar.tone === "primary" ? "text-primary" : "text-foreground"
                }`}
              >
                {bar.label}
              </div>
              <div className="slide-caption text-muted-foreground">{bar.detail}</div>
            </div>

            <div className="flex-1 flex items-center gap-4">
              <div className="flex-1 h-10 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    bar.tone === "primary" ? "bg-primary" : "bg-secondary/40"
                  }`}
                  style={{ width: `${bar.width}%` }}
                />
              </div>
              <div
                className={`font-display font-bold leading-none w-40 ${
                  bar.tone === "primary" ? "text-primary" : "text-foreground/70"
                }`}
                style={{ fontSize: "clamp(2rem, 4cqw, 3.25rem)" }}
              >
                {bar.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-card border-2 border-border rounded-2xl p-6 text-center space-y-1">
          <div
            className="font-display font-bold text-foreground/70 leading-none"
            style={{ fontSize: "clamp(2.25rem, 5cqw, 4rem)" }}
          >
            17.2×
          </div>
          <p className="slide-caption text-muted-foreground">
            One mistake, amplified — everyone working in parallel, nobody coordinating
          </p>
        </div>
        <div className="bg-card border-2 border-primary/40 rounded-2xl p-6 text-center space-y-1">
          <div
            className="font-display font-bold text-primary leading-none"
            style={{ fontSize: "clamp(2.25rem, 5cqw, 4rem)" }}
          >
            4.4×
          </div>
          <p className="slide-caption text-muted-foreground">
            The same mistake, with one director in the middle
          </p>
        </div>
      </div>

      <Citation
        sources={[
          "Kim, Liu et al. (2026). Towards a Science of Scaling Agent Systems. Google Research, arXiv:2512.08296.",
          "180 agent configurations across five architectures and four benchmarks (Finance-Agent, BrowseComp-Plus, PlanCraft, Workbench).",
        ]}
      />
    </div>
  </div>
);
