import { Citation } from "@/components/blocks/Citation";

const ROWS = [
  {
    label: "Same model in every role",
    detail: "One “best” AI plays all the parts",
    score: 59,
    range: "50–59%",
    tone: "muted" as const,
  },
  {
    label: "Cast at random",
    detail: "Whoever happens to be in the room",
    score: 57,
    range: "54–60%",
    tone: "muted" as const,
  },
  {
    label: "Auditioned for the role",
    detail: "Each model reads for the part, then you cast",
    score: 66,
    tone: "primary" as const,
  },
];

const MAX = 70;

/**
 * The AI-side evidence for "cast for role fit, not for the biggest name."
 * Amazon AGI / NYU ran a multi-model debate (two opposing sides + a judge)
 * and compared casting strategies on the same questions.
 */
export const CastingRoleFitSlide = () => (
  <div className="flex-1 flex flex-col items-center justify-center animate-fade-in px-10 py-8">
    <div className="w-full max-w-6xl space-y-7">
      <div className="text-center space-y-3">
        <div className="slide-kicker text-secondary font-bold tracking-[0.25em]">
          Casting · the evidence
        </div>
        <h1 className="slide-subtitle font-display font-bold text-foreground">
          They made three AIs run a debate — then changed only{" "}
          <span className="text-primary italic">who played which part.</span>
        </h1>
      </div>

      <div className="space-y-4">
        {ROWS.map((row) => (
          <div key={row.label} className="flex items-center gap-6">
            <div className="w-[38%] text-right">
              <div
                className={`slide-body font-display font-bold ${
                  row.tone === "primary" ? "text-primary" : "text-foreground"
                }`}
              >
                {row.label}
              </div>
              <div className="slide-caption text-muted-foreground">{row.detail}</div>
            </div>

            <div className="flex-1 flex items-center gap-4">
              <div className="flex-1 h-10 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    row.tone === "primary" ? "bg-primary" : "bg-secondary/40"
                  }`}
                  style={{ width: `${(row.score / MAX) * 100}%` }}
                />
              </div>
              <div
                className={`font-display font-bold leading-none w-40 ${
                  row.tone === "primary" ? "text-primary" : "text-foreground/70"
                }`}
                style={{ fontSize: "clamp(2rem, 4cqw, 3.25rem)" }}
              >
                {row.range ?? `${row.score}%`}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border-2 border-border rounded-2xl p-7 space-y-3 max-w-5xl mx-auto">
        <p className="slide-body text-foreground/90">
          And the kicker: the model that scored highest on its own was{" "}
          <span className="font-bold text-primary">not</span> the best in every role. Individual
          talent did not predict ensemble fit.
        </p>
      </div>

      <Citation
        sources={[
          "Zhang, Kim, Xiang, Gao & Cao (2026). Dynamic Role Assignment for Multi-Agent Debate. arXiv:2601.17152. Amazon AGI / NYU.",
          "Accuracy on GPQA, DMAD framework. Random casting ranged 51–61% across configurations.",
        ]}
      />
    </div>
  </div>
);
