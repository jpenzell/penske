/**
 * Learning outcome 3: which parts of a learning-design workflow belong to
 * humans, which to AI, and where the handoff line sits.
 */
const CAST = [
  {
    role: "AI plays",
    tone: "muted" as const,
    items: [
      "First-draft scenario branches and distractors",
      "Rewriting an SME brain-dump into plain language",
      "Variants: same objective, five audiences",
      "Summarizing evaluation comments and survey text",
      "Job aids, checklists, knowledge-check banks",
    ],
  },
  {
    role: "Humans hold",
    tone: "primary" as const,
    items: [
      "The learning objective and why it matters here",
      "What good actually looks like on a real Penske site",
      "Voice, safety language, and compliance judgment",
      "The moment of difficulty the learner must feel",
      "The final yes — nothing ships unheard",
    ],
  },
];

export const LearningHandoffsSlide = () => (
  <div className="flex-1 flex flex-col items-center justify-center animate-fade-in px-10 py-8">
    <div className="w-full max-w-6xl space-y-7">
      <div className="text-center space-y-2">
        <div className="slide-kicker text-secondary font-bold tracking-[0.25em]">
          Casting the learning-design workflow
        </div>
        <h1 className="slide-subtitle font-display font-bold text-foreground">
          Cast AI in the roles it can actually play.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CAST.map((col) => (
          <div
            key={col.role}
            className={`rounded-2xl p-7 space-y-4 border-2 ${
              col.tone === "primary"
                ? "bg-primary/5 border-primary"
                : "bg-card border-border"
            }`}
          >
            <div
              className={`slide-kicker font-bold ${
                col.tone === "primary" ? "text-primary" : "text-foreground/60"
              }`}
            >
              {col.role}
            </div>
            <ul className="space-y-2 text-left">
              {col.items.map((i) => (
                <li key={i} className="slide-caption text-foreground/85 flex gap-3">
                  <span
                    className={
                      col.tone === "primary" ? "text-primary" : "text-foreground/40"
                    }
                  >
                    ▸
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="slide-body text-center text-foreground/85 max-w-5xl mx-auto">
        The handoff rule: AI drafts <span className="italic">volume</span>, humans own{" "}
        <span className="italic">intent</span> — and every handoff back to a human comes with the
        note that says what to listen for.
      </p>
    </div>
  </div>
);
